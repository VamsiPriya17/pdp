import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
export default function Component() {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
