import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Input, Text } from '@chakra-ui/react'
import { json, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode"
import SearchBar from './SearchBar'
import { getLogoutUser } from '../../Redux/auth/action'
import axios from 'axios'

const init={
  name:"",
  role:""
}

const Navbar = ({isAuthenticated}) => {


  const [role,setRole]=useState("")
  const [loginopen, setloginopen] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((store) => store.auth);
  console.log("user auth",user)
  const token =JSON.parse(localStorage.getItem("token"))
  const navigate = useNavigate();
  const [userName,setUserName]=useState("")

  const decoded = jwt_decode(token);
 
console.log("decode token", isAuthenticated);

const logoutuser = async() => {
  let token = JSON.parse(localStorage.getItem("token"));
  // console.log(token)

  const res = await fetch("http://localhost:8080/user/logoutuser", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": token,
          Accept: "application/json"
      }
  });

  const data = await res.json();

  if (data.status == 201) {
    dispatch(getLogoutUser())
    isAuthenticated=false
    // nav("/")
    setloginopen(false)
      alert('User logged out Successfully')
      localStorage.removeItem("usersdatatoken");
  } else {
  }
}

  useEffect(()=>{
    

  },[])

  return (
    <div id='navbar'>
      <div id="logodiv">
       <Link to='/'> <img src="https://i.postimg.cc/mrWqF7H1/YOurShop.png" alt="" /></Link>
      </div>

      <div id="searchBox">
      <SearchBar/>
      </div>

      <div id="cartDiv">
      <i class="fa-solid fa-cart-shopping" style={{color:'black'}}></i>
      <Link to="/cartPage"><Text>Cart</Text></Link>
      </div>


      <div id="loginSignupDiv">
      
      <button onClick={()=>{setloginopen(!loginopen)}}>
      <i class="fa-solid fa-user"></i>
      {
        isAuthenticated === true?
        < >
        {user.validUser.name}
        {
                  loginopen ? <>
                    <div className="loginbox">
                      <div className="account"  >
                        <h1>My Account</h1>
                      </div>
                      <div className="logout" onClick={()=>{logoutuser()}} >
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

