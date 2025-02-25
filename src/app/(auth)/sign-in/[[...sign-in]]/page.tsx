import { Metadata } from "next"
import SignInComponent from "./SignIn"

export const metadata: Metadata = {
  title: "Sign In",
}

export default function Page() {
  return (
    <main className='static flex h-screen flex-col items-center justify-center p-3'>
      <SignInComponent />
    </main>
  )
}
