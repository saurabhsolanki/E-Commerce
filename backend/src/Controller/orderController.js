const order = require("../model/Order.model");

exports.postOrder = async (req, res) => {
    const {userData,orderItems,itemsPrice,shippingPrice,totalPrice}=req.body
    try {
        const orderData=new order({userData,orderItems,itemsPrice,shippingPrice,totalPrice,paidAt:Date.now(),user:req.userId})
        await orderData.save()
        console.log(orderData)
        return res.status(200).json(orderData)
        
    } catch (error) {
        console.log(error)
        return res.status(401).json(error)
    }
};


exports.myOrder = async(req,res,next) =>{
    const orderdata = await order.find({user: req.userId})

    try {
        if(!orderdata){
            res.status(401).json("order doesn't present")
        }
        else{
            res.status(200).json(orderdata)
        }
        
    } catch (error) {
        console.log(error)
    }

}
