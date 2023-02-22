import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Header.css'

const Header = () => {
    const [role,setRole]=useState("User")
  return (
    <div id='headerDiv'>

      <div id="leftHeader">
        <Link to='/products'> <Text>Mens </Text> </Link>
        <Link to='/products'> <Text> Womens</Text> </Link>
        <Link to='/products'> <Text>Child </Text> </Link>
        <Link to='/products'> <Text> New Arrivals </Text> </Link>
        <Link to='/products'> <Text> Discounted</Text> </Link>
      </div>

      <div id="rightHeaser">
        <Text>{role || 'User'}</Text>
      </div>
    </div>
  )
}

export default Header
