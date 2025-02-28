import { EditorFormProps } from "@/lib/type"
import GeneralInfoForm from "./form/GeneralInfoForm"
import PersonalInfoForm from "./form/PersonalInfoForm"
import WorkExperienceForm from "./form/WorkExperienceForm"
import EducationForm from "./form/EducationForm"
import SkillForm from "./form/SkillForm"
import SummaryForm from "./form/SummaryForm"

export const steps: {
  title: string
  component: React.ComponentType<EditorFormProps>
  key: string
}[] = [
  { title: "General Info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal Info", component: PersonalInfoForm, key: "pesonal-info" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  { title: "Education", component: EducationForm, key: "education" },
  { title: "Skills", component: SkillForm, key: "skill" },
  { title: "Summary", component: SummaryForm, key: "summary" },
]
