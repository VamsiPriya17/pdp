import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div>
      <div className="relative h-[200px] w-full rounded-2xl lg:h-[400px]">
        <Image
          src="/img/banner1.png"
          alt="banner for fruits"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="mt-1 flex w-full items-center justify-center">
        <div className="mx-2 h-[6px] w-4 rounded-lg bg-green-600"></div>
        <div className=" h-[6px] w-3 rounded-full bg-gray-400"></div>
        <div className="mx-2 h-[6px] w-3 rounded-full bg-gray-400"></div>
      </div>
    </div>
  )
}

export default Banner
