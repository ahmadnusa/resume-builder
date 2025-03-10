import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Header */}
      {/* <header className='flex items-center justify-between border-b px-4 py-3'>
        <div className='flex items-center gap-2'>
          <div className='flex size-8 items-center justify-center rounded-full bg-green-500'>
            <Skeleton className='size-5 rounded-full' />
          </div>
          <Skeleton className='h-6 w-28' />
        </div>
        <div className='flex items-center gap-4'>
          <Skeleton className='size-6 rounded-full' />
          <Skeleton className='size-6 rounded-full' />
        </div>
      </header> */}

      {/* Main content */}
      <div className='flex flex-1 flex-col'>
        {/* Page title */}
        <div className='border-b py-6 text-center'>
          <Skeleton className='mx-auto mb-2 h-8 w-48' />
          <Skeleton className='mx-auto h-4 w-96' />
        </div>

        {/* Progress steps */}
        <div className='border-b px-6 py-3'>
          <div className='mx-auto flex max-w-4xl items-center justify-center gap-2 md:gap-4'>
            {[
              "General Info",
              "Personal Info",
              "Work experience",
              "Education",
              "Skills",
              "Summary",
            ].map((_, index) => (
              <div key={index} className='flex items-center'>
                <Skeleton
                  className={`h-4 ${index === 1 ? "w-28 bg-primary/40" : "w-20"}`}
                />
                {index < 5 && <Skeleton className='mx-1 size-3 rounded-full' />}
              </div>
            ))}
          </div>
        </div>

        {/* Form and preview */}
        <div className='grid flex-1 grid-cols-1 gap-4 md:grid-cols-2'>
          {/* Left side - Form */}
          <div className='overflow-auto p-6'>
            <Skeleton className='mb-6 h-7 w-36' />
            <Skeleton className='mb-8 h-4 w-48' />

            {/* Photo upload */}
            <div className='mb-6'>
              <Skeleton className='mb-2 h-5 w-24' />
              <div className='flex items-center gap-4'>
                <Skeleton className='h-10 w-32 rounded-md' />
                <Skeleton className='h-4 w-24' />
                <Skeleton className='ml-auto h-10 w-20 rounded-md' />
              </div>
            </div>

            {/* Name fields */}
            <div className='mb-6 grid grid-cols-2 gap-4'>
              <div>
                <Skeleton className='mb-2 h-5 w-24' />
                <Skeleton className='h-10 w-full rounded-md' />
              </div>
              <div>
                <Skeleton className='mb-2 h-5 w-24' />
                <Skeleton className='h-10 w-full rounded-md' />
              </div>
            </div>

            {/* Job Title */}
            <div className='mb-6'>
              <Skeleton className='mb-2 h-5 w-20' />
              <Skeleton className='h-10 w-full rounded-md' />
            </div>

            {/* City/Country */}
            <div className='mb-6 grid grid-cols-2 gap-4'>
              <div>
                <Skeleton className='mb-2 h-5 w-16' />
                <Skeleton className='h-10 w-full rounded-md' />
              </div>
              <div>
                <Skeleton className='mb-2 h-5 w-20' />
                <Skeleton className='h-10 w-full rounded-md' />
              </div>
            </div>

            {/* Phone */}
            <div className='mb-6'>
              <Skeleton className='mb-2 h-5 w-16' />
              <Skeleton className='h-10 w-full rounded-md' />
            </div>

            {/* Email */}
            <div className='mb-6'>
              <Skeleton className='mb-2 h-5 w-16' />
              <Skeleton className='h-10 w-full rounded-md' />
            </div>

            {/* Navigation buttons */}
            <div className='mt-10 flex gap-4'>
              <Skeleton className='h-10 w-32 rounded-md' />
              <Skeleton className='h-10 w-32 rounded-md bg-primary/40' />
            </div>
          </div>

          {/* Right side - Preview */}
          <div className='hidden border-l md:block'>
            <div className='h-full overflow-auto p-6'>
              <div className='mx-auto max-w-md rounded-md bg-white p-6 shadow-sm'>
                {/* Resume preview */}
                <div className='space-y-4'>
                  <Skeleton className='h-8 w-48' />
                  <Skeleton className='h-5 w-36' />

                  <div className='flex items-center gap-2 text-sm'>
                    <Skeleton className='h-3 w-40' />
                    <Skeleton className='size-3 rounded-full' />
                    <Skeleton className='h-3 w-24' />
                    <Skeleton className='size-3 rounded-full' />
                    <Skeleton className='h-3 w-48' />
                  </div>

                  <div className='pt-4'>
                    <Skeleton className='h-4 w-full' />
                    <Skeleton className='mt-2 h-4 w-full' />
                    <Skeleton className='mt-2 h-4 w-3/4' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='flex justify-end border-t p-3'>
          <Skeleton className='h-10 w-24 rounded-md' />
        </div>
      </div>
    </div>
  )
}
