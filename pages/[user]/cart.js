import { Add, ArrowBackIosOutlined, Delete } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProductCartCard from '../../components/ProductCartCard'
import axios from 'axios'
function cart() {
  const router = useRouter()
  const [cartItems,setCartItems] = useState([])
  const [countItems,setCountItems] = useState([])
  const [loading,setLoading] = useState(0)
  const [trigger, setTrigger] = useState(0)
  const [request, setRequest] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [offer, setOffer] = useState(0)
  
  useEffect(()=>{
    setLoading(1)
    if(router.query.user){ 
      fetch(`https://basket-git-dev-santhosh-cloud.vercel.app/api/user/${router.query.user}/cart`,{
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      }).then((response)=>response.json()).then((data)=>{console.log(data.array);setCartItems(data.product);setCountItems(data.array);setSubTotal(parseInt(data.array[0].price))}).then(()=>{
        setLoading(0)
      })
      
    }
  },[router.query.user])

  const handleRequest = () =>{
    setRequest(1)
    axios.get(`https://basket-git-dev-santhosh-cloud.vercel.app/api/user/${router.query.user}/cart?evaluate=true&product_id=${cartItems[0]._id}`).then((response)=>setOffer(response.data))
    
  }

  if(loading) return <div>Loading</div>
  return (
    <div className="min-h-screen bg-gray-50 p-4 ">
      <div className="flex items-center ">
        <Link href="/" passHref>
          <div className="flex-1">
            <ArrowBackIosOutlined className=" text-gray-800" />
          </div>
        </Link>
        <div className="flex-1 text-center text-base font-semibold text-gray-800">
          Order details
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mt-6">
        <div className="mb-6 text-2xl font-bold text-gray-800">My Cart</div>
        {cartItems.map((item,index)=>{
          let a = countItems.findIndex((e)=> e.product_id === item._id)
          {/* setSubTotal(subTotal + parseInt(a.price))
          setOffer(offer + parseInt(a.discount)) */}
          return(
          <div key={index}>
            <ProductCartCard imgUrl={item.imgUrl} title={item.title} id={item._id} subTitle={item.subTitle} price={item.price} count={countItems[a].count} />
          </div>
          )}
        )}
        <motion.div whileTap={{ scale: 0.9 }} className="mt-6">
          <div className="text-2xl font-bold text-gray-800">
            Delivery Location
          </div>
          <div className="mt-6 flex items-center rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex items-center rounded-md bg-gray-200 p-4">
              <LocationOnIcon className=" text-orange-500" />
            </div>
            <div className="p-4">
              <p className="text-base font-bold text-gray-800">
                IIITDM Kancheepuram
              </p>
              <p className="text-sm text-gray-400">Chennai</p>
            </div>
          </div>
        </motion.div>
        <div className="mt-6">
          <div className="text-2xl font-bold text-gray-800">Order Info</div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-500">SubTotal</div>
              <div className="font-bold text-gray-700">Rs {subTotal}</div>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="text-gray-500">Offer</div>
              <div className="font-bold text-gray-700">-Rs {offer}</div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-gray-500">Total</div>
              <div className="text-2xl font-bold text-gray-700">
                Rs {!request ? subTotal : subTotal - offer}
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 py-4 ">
          <motion.div
            onClick={() => 
              handleRequest()
            }
            whileTap={{ scale: 0.9 }}
            className={`rounded-2xl ${
              request ? 'bg-gray-300 text-gray-600' : 'bg-orange-500 text-white'
            } py-3 text-center`}
          >
            {!request ? 'Request' : 'Requested'}
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="mt-2 rounded-2xl bg-orange-500 py-3 text-center text-white"
          >
            Checkout
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default cart
