import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
function BestSellers({ data }) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const temp = data.filter((item) => item.bestSeller === 1)
    setProducts(temp)
  }, [])

  return (
    <div>
      {/* Heading */}
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Best Sellers</h2>
      </div>
      {products.map((item) => (
        <div className="mt-2">
          <ProductCard
            id={item._id}
            url={item.imgUrl}
            color="bg-red-50"
            title={item.title}
            subTitle={item.subTitle}
            desc={item.description}
            rating={item.rating}
          />
        </div>
      ))}
    </div>
  )
}

export default BestSellers
