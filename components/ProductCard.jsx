import React from 'react'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'
import Link from 'next/link'
function ProductCard({ url, color, title, subTitle, desc, rating, id }) {
  return (
    <div>
      <Link href={`/products/${id}`} passHref>
        <div className="flex rounded-2xl bg-white p-3 shadow-sm ">
          <div className={`${color} rounded-2xl p-5`}>
            <div className="relative h-[60px] w-[60px]">
              <Image
                src={url}
                alt="brocolli"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex w-full justify-center ">
            <div className="flex w-[80%] flex-col">
              <h2 className="text-base font-bold">{title}</h2>
              <p className="pt-1 text-[14px] leading-4 text-gray-400">
                {subTitle}
              </p>
              <p className="mt-2 flex items-center">
                <StarIcon className="text-orange-400" />
                <p className="ml-1 font-bold">{rating}</p>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
