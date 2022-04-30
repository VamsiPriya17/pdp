import { ArrowBackOutlined } from '@mui/icons-material'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import ProductMainCard from '../components/ProductMainCard'

function fruits() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" passref>
            <motion.div whileTap={{ scale: 0.9 }}>
              <ArrowBackOutlined />
            </motion.div>
          </Link>
        </div>
        <div className="flex-1">
          <p className="text-center text-2xl font-semibold text-gray-800">
            Fruits
          </p>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <ProductMainCard />
        <ProductMainCard />
        <ProductMainCard />
        <ProductMainCard />
        <ProductMainCard />
      </div>
    </div>
  )
}

export default fruits
