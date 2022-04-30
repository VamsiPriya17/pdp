// 6264e7dc9de6bac9f630edc4
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Badge } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import { ArrowBack } from '@mui/icons-material'
import Link from 'next/link'
import axios from 'axios'

function Product({ data }) {
  const { data: session, status } = useSession()
  const [userData, setUserData] = useState({})
  const [animationComplete ,setAnimationComplete] = useState(0)
  const [cartUpdated,setCartUpdated] = useState(0)
  const [userName, setUserName] = useState('.')
  const router = useRouter()
  const constraintsRef = useRef(null)
  const [cartCount, setCartCount] = useState(0)
  const [trigger, setTrigger] = useState(0)
  const [sliderFinish, setSliderFinish] = useState(0)
  const [count, setCount] = useState(1)
  const x = useMotionValue(0)
  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.user.name)
      fetch(
        `${process.env.BASE_URI}/api/user/${session.user.name}`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setUserData(data)
          setCartCount(data.cart.length)
        })
        .catch((error) => console.log(error))
    }
  }, [status])
  const background = useTransform(
    x,
    [0, 100, 200],
    ['#f3f4f6', '#fbbf24', '#f97316']
  )
  const output =
    count === 0
      ? ['#64748b', '#1f2937', '#f9fafb']
      : ['#1f2937', '#1f2937', '#f9fafb']
  const color = useTransform(x, [0, 100, 200], output)
  const handleDragEnd = () => {
    setTrigger(0)
    if (x.get() > constraintsRef.current.offsetWidth / 3) setTrigger(1)
  }
  const handleAddToCart = async () => {
    

    axios.post(`http://localhost:3000/api/user/${session.user.name}/cart`, {
      product_id: data._id,
      user: session.user.name,
      count: count.toString(),
      ordered: 'no',
      price: data.price.toString(),
      discount: '0'

    })
      .then((response) => {
        if(!cartUpdated){
          setCartCount(userData.cart.length + 1)
          setCartUpdated(1)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleAnimationComplete = () => {
    if (x.get() > constraintsRef.current.offsetWidth / 2 && !animationComplete) {
      setAnimationComplete(1)
      setSliderFinish(1)
      handleAddToCart()
    }
  }
  if (router.isFallback) {
    return <div>Loading</div>
  }
  return (
    <div className=" bg-gray-50">
      <div className=" bg-red-500/80">
        <div className=" flex flex-col  p-4 ">
          <div className=" flex items-center justify-between">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="/" passHref>
                <ArrowBack className="text-gray-800" />
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.9 }} className="">
              <Link href={`/${userName}/cart`} passHref>
                <Badge
                  badgeContent={cartCount}
                  className="rounded-full bg-white p-2 shadow-sm"
                >
                  <ShoppingCartRoundedIcon className=" text-gray-800" />
                </Badge>
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="w-full">
              <div className="relative mx-auto flex h-[300px] w-5/6 items-center justify-center">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: [0.9, 1],
                  }}
                  // transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className=" relative z-30 mx-auto h-[200px] w-5/6 overflow-hidden"
                >
                  <Image
                    className="absolute top-0 left-0 z-30 "
                    src={data.imgUrl}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
                <motion.div
                  animate={{
                    scale: [0, 0.8, 0.5, 0.8],
                    rotate: [0, 90, -270, 0],
                  }}
                  transition={{ duration: 1.5 }}
                  className=" absolute h-[350px] w-[350px] overflow-hidden"
                >
                  <svg
                    id="10015.io"
                    viewBox="0 0 480 480"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill="#f4f4ff"
                      d="M426,293Q405,346,363.5,383Q322,420,268.5,416.5Q215,413,161,403.5Q107,394,62.5,349.5Q18,305,36.5,245.5Q55,186,96,153.5Q137,121,176,93.5Q215,66,264.5,72Q314,78,354,109.5Q394,141,420.5,190.5Q447,240,426,293Z"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col rounded-t-2xl  bg-gray-50 p-4">
          <div className="m-auto mb-4 h-[4px] w-[10vh] rounded-md bg-gray-500"></div>
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className="w-full flex-1 text-[24px] font-bold text-gray-900">
                {data.title}
              </h2>
              <div className="flex w-full flex-[2] items-center justify-around text-sm">
                <div className="flex items-center">
                  <LocationOnOutlined className="text-orange-600" />
                  <p className="ml-1 text-gray-400">5km</p>
                </div>
                <div className="flex items-center">
                  <StarRateRoundedIcon className="text-orange-600" />
                  <p className="ml-1 text-gray-400">{data.rating}</p>
                </div>
                <div className="flex items-center">
                  <WatchLaterIcon className="text-base text-orange-600" />
                  <p className="ml-1 text-gray-400">{data.timeTaken} Min</p>
                </div>
              </div>
            </div>
            <p className="mt-1 text-base text-gray-400">{data.subTitle}</p>
          </div>
          <div className="mt-5 flex flex-col justify-between  ">
            <div className="flex flex-col justify-between">
              <h2 className="text-base font-bold text-gray-800">Description</h2>
              <p className="mt-2 text-gray-500 ">{data.description}</p>
            </div>

            <div className="mt-5 flex w-full flex-grow">
              <div className="flex-1 text-gray-800">
                <h2 className="text-base font-bold text-gray-800">Price</h2>
                <div className="flex w-full items-center justify-between">
                  <p className="mt-1 flex-[2] text-2xl font-bold text-orange-500">
                    ₹ {count === 0 ? data.price : data.price * count}
                  </p>
                  <div className="flex flex-1 items-center justify-between">
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        !sliderFinish && count && setCount(count - 1)
                      }}
                      className="rounded-md bg-gray-300 p-2"
                    >
                      <RemoveIcon
                        className={`${sliderFinish ? 'text-gray-100' : ''}`}
                      />
                    </motion.div>
                    <div className={`font-semibold text-gray-700 `}>
                      <p>{count} Kg</p>
                    </div>
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        {
                          !sliderFinish && setCount(count + 1)
                        }
                      }}
                      className={`${
                        sliderFinish ? 'bg-gray-300' : 'bg-orange-500'
                      } rounded-md p-2`}
                    >
                      <AddIcon className="text-gray-100" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-grow items-center justify-center">
            <motion.div
              whileTap={sliderFinish && { scale: 0.9 }}
              style={{ background }}
              ref={constraintsRef}
              className="slider relative mt-2 flex h-[65px] w-full items-center justify-center rounded-lg bg-orange-500 "
            >
              <motion.p
                style={{ color }}
                className={`${
                  count === 0 ? 'text-gray-500' : ''
                } font-semibold`}
              >
                {sliderFinish ? 'Added to Cart' : 'Add to Cart'}
              </motion.p>
              <AnimatePresence>
                {!sliderFinish && (
                  <motion.div
                    style={{ x }}
                    animate={
                      trigger
                        ? { x: constraintsRef.current.offsetWidth - 65 }
                        : {}
                    }
                    transition={{
                      duration: 0.3,
                    }}
                    whileTap={{
                      scale: 0.9,
                      rotate: 190,
                      borderRadius: '100%',
                    }}
                    onAnimationComplete={handleAnimationComplete}
                    drag={count === 0 ? false : 'x'}
                    className="absolute top-0 left-0 flex h-full w-[70px] items-center justify-center rounded-md bg-white"
                    dragConstraints={constraintsRef}
                    dragElastic={2}
                    onDragEnd={handleDragEnd}
                    dragSnapToOrigin={!trigger ? true : false}
                    exit={{ opacity: 0 }}
                  >
                    <CircleOutlinedIcon
                      className={`${
                        count === 0 ? 'text-gray-500' : 'text-orange-500'
                      } text-center text-2xl`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.BASE_URI}/api/product/${params.product}`
  )
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}
export async function getStaticPaths({}) {
  const res = await fetch(`${process.env.BASE_URI}/api/products`)
  const data = await res.json()

  const paths = data.map((item) => ({
    params: { product: item._id.toString() },
  }))
  return {
    paths,
    fallback: true, // false or 'blocking'
  }
}
