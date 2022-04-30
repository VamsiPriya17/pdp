import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import StarRateRounded from '@mui/icons-material/StarRateRounded'
function ProductMainCard() {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="overflow-hidden rounded-xl bg-white p-4 shadow-sm"
    >
      <motion.div className=" rounded-xl bg-red-50 p-4 pb-0">
        <div className="relative h-[125px] w-full">
          <Image
            src="/img/apple.png"
            alt="apple"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </motion.div>
      <div className="flex flex-col items-start py-3">
        <div className="flex w-full items-center justify-between ">
          <p className="text-sm font-semibold">Apple</p>
          <div className="flex flex-1 items-end justify-end ">
            <StarRateRounded className="text-orange-500" />
            <p className="text-sm font-semibold text-gray-600">4.4</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">Organic</p>
        {/* <p className="text-base">4.4</p> */}
        <div>
          <div className="flex-3 mt-1">
            <p className="text-base font-semibold text-gray-800">
              Rs 25/
              <span className="">Kg</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductMainCard
