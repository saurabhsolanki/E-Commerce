const express=require('express')
const router=new express.Router()
const orderController=require("../Controller/orderController")
const {isAuth}=require("../middleware/authentication")

router.post('/',isAuth,orderController.postOrder)
router.get('/:id',isAuth,orderController.myOrder)

module.exports=router
