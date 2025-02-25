"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

// interface ResumeEditorProps {
//   resumeToEdit: ResumeServerData | null
// }

export default function ResumeEditor() {
  return (
    <div className='flex grow flex-col'>
      <header className='space-y-1.5 border-b px-3 py-5 text-center'>
        <h1 className='text-2xl font-bold'>Design your resume</h1>
        <p className='text-sm text-muted-foreground'>
          Follow the steps below to create your resume. Your progres will be
          saved automatically
        </p>
      </header>
      <main className='relative grow'>
        <div className='absolute bottom-0 top-0 flex w-full'>
          <div
            className={cn(
              "w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2",
            )}
          ></div>
        </div>
      </main>
      <footer className='w-full border-t px-3 py-5'>
        <div className='mx-auto flex max-w-7xl flex-wrap justify-between gap-3'>
          <div className='flex items-center gap-3'>
            <Button variant='secondary'>Previous step</Button>
            <Button>Next step</Button>
          </div>
          <div className='flex items-center gap-3'>
            <Button variant={"brutal"} asChild>
              <Link href='/resumes'>close</Link>
            </Button>
            <p>saving...</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
