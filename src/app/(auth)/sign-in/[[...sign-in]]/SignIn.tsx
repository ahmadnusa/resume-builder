"use client"

import { SignIn } from "@clerk/nextjs"
import { dark, neobrutalism } from "@clerk/themes"
import { useTheme } from "next-themes"
import React from "react"

export default function SignInComponent() {
  const { theme } = useTheme()
  return (
    <SignIn
      appearance={{
        baseTheme: theme === "dark" ? dark : neobrutalism,
        variables: { colorPrimary: "#4daa57" },
        layout: { socialButtonsPlacement: "bottom" },
      }}
    />
  )
}
