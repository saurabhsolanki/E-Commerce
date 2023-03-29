import { Divider } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import "./res.css"
import { getLogoutUser } from '../../../Redux/auth/action';

const ResponsiveNav = ({user,isAuthenticated,drawerr}) => {

  const nav = useNavigate()
  const dispatch = useDispatch();

   const admin = () => {
    if(user.validUser.role === "admin"){
      nav('/admin')
    }
    else{
      alert.error('Sorry you are not an Admin!')
    }
  }

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
        alert('User logged out Successfully')
        localStorage.removeItem("usersdatatoken");
    } else {
    }
}

const signin = () =>{
  nav('/signup')
}

  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {
             isAuthenticated ?
             <h1  className='avtar2'>{user.validUser.name}</h1>
              : 
           <h1 className='avtar2' onClick={()=>{signin();drawerr()}} >Signin</h1>
          }
        </div>
        <div className="nav_btn" onClick={()=>{drawerr()}}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Mens</Link>
            <Link to='/products'>Womens</Link>
            <Divider/>
            <Link to='/admin' onClick={()=>admin()}>Admin Panel</Link>
            <Link to='/userAccount'>My Account</Link>
            <Link to='' onClick={()=>logoutuser()}>Logout&nbsp;&nbsp;<i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
        </div>
      </div>
    </>
  )
}

export default ResponsiveNav
