import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Header.css'
import jwt_decode from "jwt-decode"


const Header = () => {
    const [role,setRole]=useState("User")
    const token =JSON.parse(localStorage.getItem("token"))
    const decoded = jwt_decode(token);

    useEffect(()=>{
      if(token){
        setRole(decoded.role)
      }
      else{
        setRole("User")
      }
  
    },[token])
  return (
    <div id='headerDiv'>

      <div id="leftHeader">
        <Link to='/products'> <Text>Mens </Text> </Link>
        <Link to='/products'> <Text> Womens</Text> </Link>
        <Link to='/products'> <Text>Child </Text> </Link>
        <Link to='/products'> <Text> New Arrivals </Text> </Link>
        <Link to='/products'> <Text> Discounted</Text> </Link>
      </div>

      <div id="rightHeader">
      <Link to='/productDashboard'> <Text> Product Dashboard</Text> </Link>
      <Link to='/usersDashboard'> <Text> User Dashboard</Text> </Link>
        <Text>You are :- {role || 'User'}</Text>
      </div>
    </div>
  )
}

export default Header
