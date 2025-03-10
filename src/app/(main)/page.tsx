"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] place-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <Button
        variant={"brutal"}
        onClick={() =>
          toast.error("Could not save the changes.", {
            closeButton: true,
            duration: Infinity,
            style: {
              background: "hsl(0, 84.2%, 60.2%)",
            },
            action: {
              label: "Retry",
              onClick: () => console.log("hello"),
            },
          })
        }
      >
        hello
      </Button>
    </div>
  )
}
