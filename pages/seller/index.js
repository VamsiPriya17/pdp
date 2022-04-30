import NewProduct from "../../components/seller/NewProduct"
import YourProducts from "../../components/seller/YourProducts"

function index() {
  return (
    <div className='p-4 bg-gray-50'>
        <YourProducts/>
        <NewProduct/>
    </div>
  )
}

export default index