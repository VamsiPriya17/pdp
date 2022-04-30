import axios from "axios"
import {useEffect} from 'react'
function YourProducts() {
    useEffect(()=>{
        const data = axios.get(`${BASE_URI}/api/products`)
        console.log(data)
    },[])
  return (
    <div>
        <div className="font-semibold text-2xl text-gray-800">Your Products</div>
        <div></div>
    </div>
  )
}

export default YourProducts