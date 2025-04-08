import { ResumeValues } from "@/lib/validation"
import { useState } from "react"
import { generateSummary } from "./actions"
import { toast } from "sonner"
import LoadingButton from "@/components/LoadingButton"
import { WandSparklesIcon } from "lucide-react"
import { useSubscriptionLevel } from "../../SubscriptionLevelProvider"
import usePremiumModal from "@/hooks/usePremiumModal"
import { canUseAITools } from "@/lib/permissions"

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues
  onSummaryGenerated: (summary: string) => void
}

export default function GenerateSummaryButton({
  resumeData,
  onSummaryGenerated,
}: GenerateSummaryButtonProps) {
  const subscriptionLevel = useSubscriptionLevel()
  const premiumModal = usePremiumModal()
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    if (!canUseAITools(subscriptionLevel)) {
      premiumModal.setOpen(true)
      return
    }
    try {
      setLoading(true)
      const aiResponse = await generateSummary(resumeData)
      onSummaryGenerated(aiResponse)
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong. Please try again", {
        style: {
          background: "hsl(0, 84.2%, 60.2%)",
        },
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <LoadingButton
      variant='outline'
      type='button'
      onClick={handleClick}
      loading={loading}
    >
      <WandSparklesIcon className='size-4' />
      Generate (AI)
    </LoadingButton>
  )
}
