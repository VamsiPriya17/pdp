import dbConnect from '../../../util/dbConnect'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  const { method } = req
  const { id } = req.query
  await dbConnect()

  if (method === 'GET') {
    try {
      const products = await Product.findOne({ _id: id })
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ success: false })
    }
  }
}
