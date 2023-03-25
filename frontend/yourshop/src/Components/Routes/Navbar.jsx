import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Input, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import jwt_decode from "jwt-decode"
import SearchBar from './SearchBar'

const init={
  name:"",
  role:""
}

const Navbar = () => {
  const [role,setRole]=useState("")
  const [loginopen, setloginopen] = useState(false)
  // const {name,role}=state
  const user = useSelector((store) => store.auth);
  console.log("user auth",user)
  const token =JSON.parse(localStorage.getItem("token"))
  const navigate = useNavigate();
  const [userName,setUserName]=useState("")

  const decoded = jwt_decode(token);
 
// console.log("decode token",decoded);

const handleNavigate=()=>{
    navigate("/login")
}

  useEffect(()=>{
    if(token){
      setUserName(decoded.name)
    }
    else{
      setUserName("Login / signup")
    }

  },[token])

  return (
    <div id='navbar'>
      <div id="logodiv">
       <Link to='/'> <img src="https://i.postimg.cc/mrWqF7H1/YOurShop.png" alt="" /></Link>
      </div>

      <div id="searchBox">
      <SearchBar/>
      </div>

      <div id="cartDiv">
      <i class="fa-solid fa-cart-shopping"></i>
      <Link to="/cartPage"><Text>Cart</Text></Link>
      </div>


      <div id="loginSignupDiv">
      
      <button onClick={()=>{setloginopen(!loginopen)}}>
      <i class="fa-solid fa-user"></i>
      {
        user.isAuthenticated?
        < >
        {user.validUser.name}
        {
                  loginopen ? <>
                    <div className="loginbox">
                      <div className="account"  >
                        <h1>My Account</h1>
                      </div>
                      <div className="logout"  >
                        <h1>Logout</h1>
                      </div>
                      <div className="adminn"  >
                        <h1>Admin Panel</h1>
                      </div>
                    </div>
                  </> : ""
                }
        </>
        :<Link to='/login'>Login / Signup</Link>
      }
        
        </button>
      </div>
    </div>
  )
}

export default Navbar
