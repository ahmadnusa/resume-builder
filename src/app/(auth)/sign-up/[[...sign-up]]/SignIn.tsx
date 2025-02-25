"use client"

import { SignUp } from "@clerk/nextjs"
import { dark, neobrutalism } from "@clerk/themes"
import { useTheme } from "next-themes"

export default function SignUpComponent() {
  const { theme } = useTheme()
  return (
    <SignUp
      appearance={{
        baseTheme: theme === "dark" ? dark : neobrutalism,
        variables: { colorPrimary: "#4daa57" },
        layout: { socialButtonsPlacement: "bottom" },
      }}
    />
  )
}
