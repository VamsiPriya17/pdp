import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useSession, signIn, signOut } from 'next-auth/react'
// import Login from '../../pages/login'
import { motion } from 'framer-motion'
import Link from 'next/link'
function Header() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className="flex flex-row justify-between text-2xl font-normal text-gray-900">
      <div
        onClick={() => {
          signOut()
        }}
        className="cursor-pointer text-lg text-gray-900"
      >
        {session && <div>Hi, {session.user.name}</div>}
        <div className="text-base text-gray-500">
          What would you like to buy today?
        </div>
      </div>
      <Link
        href={`/${session.user.name}/cart`}
        passHref
        className="cursor-pointer"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className=" flex items-center justify-center rounded-2xl bg-green-600 p-4"
        >
          <LocalMallIcon className="text-2xl text-white" />
        </motion.div>
      </Link>
    </div>
  )
}

export default Header
