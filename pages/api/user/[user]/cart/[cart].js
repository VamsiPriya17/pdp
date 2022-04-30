import dbConnect from '../../../../../util/dbConnect'
import User from '../../../../../models/User'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()

  if (method === 'POST') {
    try {
      const user = await User.findOneAndUpdate({ username: req.query.user })
      const array = req.query.cart.split("_")
      user.cart.push({item_id : array[0],count: array[1]})
      await user.save()
      res.status(200).json(req.query.cart)
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
}
