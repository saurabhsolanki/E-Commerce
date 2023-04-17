const { mongoose, Schema, model } = require("mongoose");

const OrderSchema = new Schema({
    userData: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        phoneNo: { type: Number, required: true },
      },
      orderItems : [
          {
            name : {type: String, required:true},
            price : {type: Number, required:true},
            quantity : {type: Number, required:true},
            image : {type: String, required:true},
          }
      ],
      user:{
        type: mongoose.Schema.ObjectId,
        ref: "Auth",
        required: true,
      },
      itemsPrice: {type: Number, default: 0},
      shippingPrice: {type: Number, default: 0},
      totalPrice: {type: Number, default: 0},
  });

  const order=model("order", OrderSchema)
  module.exports=order