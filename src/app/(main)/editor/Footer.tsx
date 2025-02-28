import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"
import { steps } from "./steps"

interface FooterProps {
  currentStep: string
  setCurrentStep: (step: string) => void
}

export default function Footer({ currentStep, setCurrentStep }: FooterProps) {
  const previousStep = steps.find(
    (_, index) => steps[index + 1]?.key === currentStep,
  )?.key
  const nextStep = steps.find(
    (_, index) => steps[index - 1]?.key === currentStep,
  )?.key

  return (
    <footer className='w-full border-t px-3 py-5'>
      <div className='mx-auto flex max-w-7xl flex-wrap justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Button
            variant='secondary'
            onClick={
              previousStep ? () => setCurrentStep(previousStep) : undefined
            }
            disabled={!previousStep}
          >
            Previous step
          </Button>
          <Button
            onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
            disabled={!nextStep}
          >
            Next step
          </Button>
        </div>
        <div className='flex items-center gap-3'>
          <Button variant={"brutal"} className='bg-slate-500' asChild>
            <Link href='/resumes'>close</Link>
          </Button>
          <p>saving...</p>
        </div>
      </div>
    </footer>
  )
}
