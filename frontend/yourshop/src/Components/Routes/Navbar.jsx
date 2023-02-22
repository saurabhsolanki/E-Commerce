import React from 'react'
import './navbar.css'
import { Input, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
      <div id="logodiv">
       <Link to='/'> <img src="https://i.postimg.cc/mrWqF7H1/YOurShop.png" alt="" /></Link>
      </div>

      <div id="searchBox">
      <Input variant='filled' placeholder='Search Your Product...' />
      </div>

      <div id="cartDiv">
      <i class="fa-solid fa-cart-shopping"></i>
      <Link><Text>Cart</Text></Link>
      </div>


      <div id="loginSignupDiv">
      
      <button>
      <i class="fa-solid fa-user"></i>
       <Link to='/login'> Login / Signup</Link>
        
        </button>
      </div>
    </div>
  )
}

export default Navbar
