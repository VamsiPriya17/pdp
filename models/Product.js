import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title missing'],
    },
    imgUrl: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    available: {
      type: Number,
    },
    count :{
      type: Number,
    },
    rating: {
      type: Number,
    },
    timeTaken: {
      type: Number,
    },
    bestSeller: {
      type: Number,
    },
    category: {
      type: String
    },
    units: {
      type: String
    },
  },
  { timestamps: true }
)

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema)
