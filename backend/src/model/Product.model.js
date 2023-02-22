const { mongoose, Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  id: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  original_price: { type: String, required: true },
  offer_price: { type: String, required: true },
  type: { type: String, required: true },
  discount: { type: String, required: true },
  image: { type: String, required: true }
});

const Product = model("product", ProductSchema);
module.exports = Product;


// {
//     "id": 4,
//     "category": "Mens",
//     "brand": "The Indian Garage Co",
//     "title": "Floral Print Slim Fit Shirt",
//     "price": null,
//     "original_price": "₹1,749",
//     "offer_price": 490,
//     "type": "shirt",
//     "discount": "(72% off)",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20210316/kjF9/604fbd927cdb8c1f146357d7/the_indian_garage_co_blue_floral_print_slim_fit_shirt.jpg"
//   }