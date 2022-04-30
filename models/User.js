import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'title missing'],
    },
    password: {
      type: String,
      required: [true, 'password missing'],
    },
    cart: {
      type: Array,
    },
    orders: {
      type: Array,
    },
    admin: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
