import dbConnect from '../../../../util/dbConnect'
import User from '../../../../models/User'
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
export default async function handler(req, res) {
  await runMiddleware(req, res, cors)
  const { method } = req
  console.log(req.query.user)
  await dbConnect()
  if (method === 'GET') {
    try {
      const user = await User.findOne({ username: req.query.user })
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  }
}
