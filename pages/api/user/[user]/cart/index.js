import dbConnect from '../../../../../util/dbConnect'
import Product from '../../../../../models/Product'
import UniCart from '../../../../../models/UniCart'

export default async function handler(req, res) {
  const { method } = req
  // console.log(req.query.cart)
  await dbConnect()
  if (method === 'GET') {
    if(req.query.evaluate){
      console.log(req.query)
      try{
        const array = await UniCart.find()
        const weight1 = parseInt(array.find((i)=>i.user === req.query.user).count)
        const product = await Product.find({_id: req.query.product_id})

        let netCost = 0
        const weight = array.map((item)=>(netCost + parseInt(item.count)))
        console.log(weight[0],'weight')
        console.log(weight1,'weight1')
        console.log(product[0].price)
        let discount = (weight1/weight[0]) * 0.03 * product[0].price
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(discount)
      }catch(err){
        res.status(500).json('failed')
      }
      
    }else{

    try {
      const array = await UniCart.find({user: req.query.user}) 
      const products = await Product.find({_id : array.map((item)=>item.product_id)})
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).json({product: products,array: array})
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
  }
  
  
}
