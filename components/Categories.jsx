import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
function Categories() {
  return (
    <div>
      {/* Categories heading  */}
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-sm font-semibold text-gray-400">See All</p>
      </div>
      {/* flex box */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          {/* apple */}
          <div className="flex w-[30%] flex-col items-center justify-center rounded-2xl bg-red-100 py-8">
            <motion.div
              className="relative h-12 w-12"
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/fruits" passref>
                <Image
                  src="/img/apple.png"
                  alt="apple"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </motion.div>
            <p className="mt-2 text-base font-bold text-red-700">Fruits</p>
          </div>
          {/* cabbage */}
          <div className="flex  w-[30%] flex-col items-center justify-center rounded-2xl bg-green-100 py-8">
            <motion.div
              className="relative h-12 w-12"
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/veggies" passref>
                <Image
                  src="/img/cabbage.png"
                  alt="apple"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </motion.div>
            <p className="mt-2 text-base font-bold text-green-700">Veggies</p>
          </div>
          {/* item */}
          <div className="flex w-[30%] flex-col items-center justify-center rounded-2xl bg-yellow-100 py-8">
            <div className="relative h-12 w-12">
              <Image
                src="/img/cheese2.png"
                alt="apple"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="mt-2 text-base font-bold text-yellow-700">Diary</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
