const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
        {
         productid:{
            type:String
         },
        quantity: {
            type:Number,
            default:1
         }
        },
        

    ]
    
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports =Cart;
