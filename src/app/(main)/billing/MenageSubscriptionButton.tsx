"use client"

import LoadingButton from "@/components/LoadingButton"
import { useState } from "react"
import { toast } from "sonner"
import { createCustomerPortalSession } from "./actions"

export default function MenageSubscriptionButton() {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    try {
      setLoading(true)
      const redirectUrl = await createCustomerPortalSession()
      window.location.href = redirectUrl
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
    <LoadingButton onClick={handleClick} loading={loading}>
      Manage subscription
    </LoadingButton>
  )
}
