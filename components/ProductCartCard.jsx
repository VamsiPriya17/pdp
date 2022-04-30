import React from 'react'
import Image from 'next/image'
import Remove from '@mui/icons-material/Remove'
import Add from '@mui/icons-material/Add'
import { Delete } from '@mui/icons-material'
import {motion} from 'framer-motion'
function ProductCartCard({title,subTitle,count,imgUrl}) {
  return (
    <div>
        <div className="flex mb-4 items-start justify-between rounded-2xl bg-white p-4 shadow-sm">
          <div className="relative  h-[100px] w-[100px] rounded-2xl bg-red-50 p-6">
            <Image
              src={imgUrl}
              alt="apple"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex h-full flex-grow flex-col justify-between px-4">
            <div>
              <p className="text-base font-semibold">{title}</p>
              <p className="text-sm text-gray-500">{subTitle}</p>
            </div>
            <div className="mt-6 flex flex-grow items-center justify-between">
              <div className="flex items-center">
                <div className="flex rounded-md bg-gray-300 p-2">
                  <Remove className="text-sm" />
                </div>
                <div className="mx-4">
                  {count}
                </div>
                <div
                  className="flex rounded-md bg-orange-500 p-2 text-white"
                >
                  <Add className="text-sm" />
                </div>
              </div>
              <motion.div whileTap={{ scale: 1.2 }}>
                <Delete className="text-gray-400" />
              </motion.div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCartCard