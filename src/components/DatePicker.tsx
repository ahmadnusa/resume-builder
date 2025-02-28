"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useId } from "react"
import CustomCalendar from "./CustomCalendar"

export default function DatePicker({
  date,
  setDate,
}: {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}) {
  const id = useId()

  return (
    <div>
      <div className='*:not-first:mt-2'>
        <Label htmlFor={id}>Date picker</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className={cn(
                "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                !date && "text-muted-foreground",
              )}
            >
              <span
                className={cn("truncate", !date && "text-muted-foreground")}
              >
                {date ? format(date, "PPP") : "Pick a date"}
              </span>
              <CalendarIcon
                size={16}
                className='shrink-0 text-muted-foreground/80 transition-colors group-hover:text-foreground'
                aria-hidden='true'
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-2' align='start'>
            <CustomCalendar date={date} setDate={setDate} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
