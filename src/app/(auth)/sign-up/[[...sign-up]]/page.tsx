import { Metadata } from "next"
import SignUpComponent from "./SignIn"

export const metadata: Metadata = {
  title: "Sign Up",
}

export default function Page() {
  return (
    <main className='flex h-screen items-center justify-center p-3'>
      <SignUpComponent />
    </main>
  )
}
