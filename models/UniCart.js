import mongoose from 'mongoose'

const UniCartSchema = new mongoose.Schema(
  {
    product_id: {
        type: String
    },
    user: {
        type: String
    },
    count: {
        type: String
    },
    ordered:{
        type: String,
        default: 'no'
    },
    price:{
        type:String,   
    },
    discount: {
        type: String
    },
  },
  { timestamps: true }
)

export default mongoose.models.UniCart || mongoose.model('UniCart', UniCartSchema)
