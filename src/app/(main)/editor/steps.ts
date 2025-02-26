import GeneralInfoForm from "./form/GeneralInfoForm"
import PersonalInfoForm from "./form/PersonalInfoForm"

export const steps: {
  title: string
  component: React.ComponentType
  key: string
}[] = [
  { title: "General Info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal Info", component: PersonalInfoForm, key: "pesonal-info" },
  {
    title: "Work experience",
    component: GeneralInfoForm,
    key: "work-experience",
  },
  { title: "Education", component: GeneralInfoForm, key: "education" },
  { title: "Skills", component: GeneralInfoForm, key: "skill" },
  { title: "Summary", component: GeneralInfoForm, key: "summary" },
]
