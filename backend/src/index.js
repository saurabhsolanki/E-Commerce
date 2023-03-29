const express = require('express')
const { default: mongoose } = require('mongoose')
const AuthData = require("./route/User.route")
const ProductData = require("./route/Product.route")
const router=require("./route/Order.route")
require("./config/db")
const cors =require("cors")

const app= express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.get('/', (req,res)=> res.send('hello'))
app.use("/user",AuthData)
app.use("/products", ProductData)
app.use("/order",router)

// mongoose.set('strictQuery', false);
app.listen(8080, async() => {
    console.log('server started on port 8080')
})