import dbConnect from '../../util/dbConnect'
import User from '../../models/User'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  if (method === 'GET') {
    try {
      const users = await User.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
  if (method === 'POST') {
    try {
      const user = await User.create(req.body)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
}
