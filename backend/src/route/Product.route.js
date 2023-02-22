const { Router } = require("express");
const app = Router();
const User = require("../model/Product.model");


app.get("/", async (req, res) => {
  const search=req.query.search||""
  const cat=req.query.category || ""
  // console.log(cat)
  let data=""
  const query={
    brand:{
      $regex:search,
      $options:"i"
    }
  }


  if(cat!="all"){
    query.category=cat
  }
  const{page=1,limit=12,orderBy="id",order="asc"}=req.query

  try {
    const user = await User.find(query)
    .sort({[orderBy]:order==="asc"?1:-1})
    .skip((page-1)*limit)
    .limit(limit)
    console.log(user)
    return res.send(user);
  } catch (error) {
    console.log(error)
  }

});

// getting the single Product
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  return res.send(user);
});

// adding the new Product
app.post('/', async (req, res) => {
  const { id,category,brand, title, price, original_price,offer_price, type, discount, image} = req.body;
  try {
      const product = await User.create({  id,category,brand, title, price, original_price,offer_price, type, discount, image});
      console.log('product: ', product);

      return res.status(201).send({ message : 'Product Added Successfully' });
      } catch (error) {
      return res.status(404).send({ error: 'Something went wrong' });
  }
});


// Deleteing the Single Product
app.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send({ message: "Product Deleted", data: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});


//patch
app.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send({ message: "Product update Successfully", data: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
