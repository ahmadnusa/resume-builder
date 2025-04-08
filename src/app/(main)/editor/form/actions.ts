"use server"

import openai from "@/lib/openai"
import { canUseAITools } from "@/lib/permissions"
import { getUserSubscriptionLevel } from "@/lib/subscription"
import {
  GenerateSummaryInput,
  generateSummarySchema,
  GenerateWorkExperienceInput,
  generateWorkExperienceSchema,
  WorkExperience,
} from "@/lib/validation"
import { auth } from "@clerk/nextjs/server"

export async function generateSummary(input: GenerateSummaryInput) {
  const { userId } = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  const subscriptionLevel = await getUserSubscriptionLevel(userId)

  if (!canUseAITools(subscriptionLevel)) {
    throw new Error("Upgrade your subscription to use this feature")
  }

  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input)

  const systemMessage = `
    You are an AI specialized in generating professional resume summaries. Given a user's job title, work experience, education, and skills, craft a concise and impactful summary suitable for a resume. Only return the summary and do not include any other information in the response. Keep it formal, structured, and engaging.
  `

  const userMessage = `
    Generate a professional resume summary based on the following details:
    
    Job Title: ${jobTitle || "Not Provided"}
    
    Work Experience:
    ${
      workExperiences
        ?.map(
          (exp) => `
      - ${exp.position || "Unknown Position"} at ${exp.company || "Unknown Company"} (${exp.startDate || "N/A"} - ${exp.endDate || "Present"})
        ${exp.description ? exp.description.replace(/\n/g, " ") : "No description available"}
    `,
        )
        .join("\n") || "No work experience provided."
    }
    
    Education:
    ${
      educations
        ?.map(
          (edu) => `
      - ${edu.degree || "Unknown Degree"} from ${edu.school || "Unknown Institution"} (${edu.startDate || "N/A"} - ${edu.endDate || "N/A"})
    `,
        )
        .join("\n") || "No education details provided."
    }
    
    Skills:
    ${skills}
  `

  console.log("System Message:", systemMessage)
  console.log("User Message:", userMessage)

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
    })

    const aiResponse = completion.choices?.[0]?.message?.content?.trim()

    if (!aiResponse) {
      throw new Error("AI response is empty or undefined.")
    }

    return aiResponse
  } catch (error) {
    console.error("Error generating summary:", error)
    throw new Error(
      "Failed to generate resume summary. Please try again later.",
    )
  }
}

export async function generateWorkExperience(
  input: GenerateWorkExperienceInput,
) {
  const { userId } = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  const subscriptionLevel = await getUserSubscriptionLevel(userId)

  if (!canUseAITools(subscriptionLevel)) {
    throw new Error("Upgrade your subscription to use this feature")
  }

  const { description } = generateWorkExperienceSchema.parse(input)

  const systemMessage = `
    You are an AI specialized in crafting professional work experience entries for resumes. Based on the provided job description, generate a structured and optimized entry that adheres to the following format. If certain details are missing, omit them but do not add any new information.
    
    Job Title: <job title>
    Company: <company name>
    Start Date: <YYYY-MM-DD> (if provided)
    End Date: <YYYY-MM-DD> (if provided)
    Description:
    - <Bullet point descriptions optimized for clarity and impact>
  `

  const userMessage = `
    Generate a professional work experience entry based on the following description:
    
    ${description}
  `

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
    })

    const aiResponse = completion.choices?.[0]?.message?.content?.trim()

    if (!aiResponse) {
      throw new Error("AI response is empty or undefined.")
    }

    console.log("AI Response:", aiResponse)

    return {
      position: aiResponse.match(/Job Title: (.*)/)?.[1] || "",
      company: aiResponse.match(/Company: (.*)/)?.[1] || "",
      description: (
        aiResponse.match(/Description:([\s\S]*)/)?.[1] || ""
      ).trim(),
      startDate: aiResponse.match(/Start Date: (\d{4}-\d{2}-\d{2})/)?.[1],
      endDate: aiResponse.match(/End Date: (\d{4}-\d{2}-\d{2})/)?.[1],
    } satisfies WorkExperience
  } catch (error) {
    console.error("Error generating work experience entry:", error)
    throw new Error(
      "Failed to generate work experience entry. Please try again later.",
    )
  }
}
