import {useState} from 'react'

function NewProduct() {
    
  return (
    <div>
        <div className="font-semibold text-2xl text-gray-800">Add a new product</div>
        <div className="mt-5 rounded-xl h-[300px] border-dashed border w-full flex justify-center items-center cursor-pointer bg-gray-200">
            <div className="px-4 py-2 shadow-md shadow-orange-500/50 text-white rounded-lg bg-orange-500">Add</div>
        </div>
    </div>
  )
}

export default NewProduct