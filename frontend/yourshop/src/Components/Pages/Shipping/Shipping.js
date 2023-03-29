import { useToast } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { shippingInfo } from '../../../Redux/Cart/action'
import './Shipping.css'
// import { shippingInfo } from '../../redux/Cart/CartAction'
// import '../Register/Login.css'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Loader } from "../../component/./Loading";
// import NavSecond from '../../component/header/NavSecond'

const Shipping = () => {

  const toast = useToast()
  const nav = useNavigate()
  const dispatch = useDispatch() 
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState("")


const shippingSubmit = (e) => {
  e.preventDefault() 
  if(city==""){
    return toast({
      position: 'top',
      title: 'Please enter your City.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
  else if(state==""){
    return toast({
      position: 'top',
      title: 'Please enter your State.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
  else if(address==""){
    return toast({
      position: 'top',
      title: 'Please enter your Address.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
  else if(phone==""){
    return toast({
      position: 'top',
      title: 'Please enter your Phone NO.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
  else if(phone.length !== 10){
    return toast({
      position: 'top',
      title: 'Phone No. should be 10 digits.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
  else{
    dispatch(shippingInfo({city,state,address,phone}))
    nav('/order')
  }
}



  return (
    
        <>
        <div className="login_div">
        <h1>Address</h1>
        {/* <h4>Enter your City</h4> */}
        <input className="input" value={city} placeholder="Enter your City" style={{fontSize: "17px", textAlign:"center"}} onChange={(e)=>setcity(e.target.value)} />
        <br /><br />
        {/* <h4>Enter your State</h4> */}
        <input className="input" type='text' placeholder="Enter your State" style={{fontSize: "17px", textAlign:"center"}} value={state}  onChange={(e)=>setstate(e.target.value)} />
        <br /><br />
        {/* <h4>Enter your Address</h4> */}
        <input className="input"  type='text' placeholder="Enter your Address" style={{fontSize: "17px", textAlign:"center"}} value={address} onChange={(e)=>setaddress(e.target.value)} />
        <br /><br />
        {/* <h4>Enter your Phone No.</h4> */}
        <input  className="input"  value={phone} placeholder="Enter your Phone No." style={{fontSize: "17px", textAlign:"center"}}  onChange={(e)=>setphone(e.target.value)}/>
        <br />
        <button className="buton" onClick={shippingSubmit} type='submit' >Proceed</button>
        {/* <ToastContainer position="top-center"/> */}
      </div>
      </>
      )
}

export default Shipping
