import { ResumeValues } from "./validation"

export interface EditorFormProps {
  resumeData: ResumeValues
  setResumeData: (data: ResumeValues) => void
}

// export const resumeDataInclude = {
//   workExperience: true,
//   educations: true,
// } satisfies Prisma.ResumeInclude

// export type ResumeServerData = Prisma.ResumeGetPayload<{
//   include: typeof resumeDataInclude
// }>
