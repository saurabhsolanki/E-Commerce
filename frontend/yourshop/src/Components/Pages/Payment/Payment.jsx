import React, { useEffect, useState } from 'react'
import './payment.css'
import { useDispatch, useSelector } from 'react-redux'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { getOrderSuccess } from '../../../Redux/Cart/action'
import { addCartItems } from '../../../Redux/Cart/action'
// import NavSecond from '../component/header/NavSecond'

const Payment = () => {

  const dispatch = useDispatch()
  const nav = useNavigate()
  const toast = useToast()

  const [pdata, setpdata] = useState({
    name: "",
    numbers: ""
  });

  const data = JSON.parse(sessionStorage.getItem('orderInfo'))
  console.log(data)
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token)

  //  const user = useSelector(store => store.login)
   const {order,isSuccess} = useSelector(store => store.order)
   console.log(order.user)
     
    const cart = useSelector((store) => store.cart.cartItems)
    const ship = useSelector((store) => store.cart.shippingInfo)

    const subtotal = cart.reduce((acc,e)=> acc+e.quantity*e.price,0)

    const shippingPrice = subtotal > 1000 ? 0 : 200
    const total = subtotal + shippingPrice


    const handleChange = (e) => {
      console.log(e.target)
      const { name, value } = e.target;
      setpdata({ ...pdata, [name]: value });
    };


  const handleSubmit = async(e) =>{
    e.preventDefault();

    const {name,numbers} = pdata;
    console.log(numbers, typeof(+numbers))

    if(name == ""){
      toast({
        position: 'top',
        title: 'Please enter your Card Name.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    else if(numbers==""){
      toast({
        position: 'top',
        title: 'Please enter your Card Number.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    else if(numbers.length !== 16){
      toast({
        position: 'top',
        title: 'Card Number should contain 16 digits only.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    else{
      const orderData = {
        userData:{
          "address":ship.address,
          "city":ship.city,
          "state":ship.state,
          "phoneNo":ship.phone,
        },
        orderItems : cart,
        itemsPrice: subtotal,
        shippingPrice: shippingPrice,
        totalPrice: total
      }
      console.log("orderDAta",orderData)
      const dataa = await axios.post(
        'http://localhost:8080/order',
        orderData,
        {
          headers:{
            authorization: token
          }
        }
      )
      console.log(dataa)
      dispatch(getOrderSuccess(dataa.data))
      counter() 
    }
}

function counter(){
  let i=0;
  let id= setInterval(function(){
    if(i==0){
      toast({
        position: 'top',
        title: 'Your Payment has been done.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
    else if(i==3){
      toast({
        position: 'top',
        title: 'Your order is confirmed.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } 
    else if(i==5){
      toast({
        position: 'top',
        title: 'Thanks for shopping from YourShop.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      localStorage.removeItem("cart");
      sessionStorage.removeItem("orderInfo");
      clearInterval(id)
      nav('/')
    } 
    i++
  },1000)
  
}


  useEffect(() => {
    // if(isSuccess === true){
    //   counter()
    //   localStorage.removeItem("cart");
    //   // dispatch(addCartItems([]))
    //   sessionStorage.removeItem("orderInfo");
    //   nav('/')
    // }
  }, [])

  return (
    <>
       <div className="pay_div">
        <h1>Payment Details</h1>
        <input className="input" name="name" type="text" 
        placeholder="Enter Card holder Name"
         style={{fontSize: "17px", textAlign:"center"}}
         onChange={handleChange}
          />
        <br />
        <br/>
        <input className="input" name="numbers" type={"number"}
        placeholder="Enter Card Number"
        style={{fontSize: "17px", textAlign:"center"}} 
        onChange={handleChange}
         />
        <button className="buton" onClick={handleSubmit}>Pay ₹{data.total}</button>
      </div>
    </>
  )
}

export default Payment
