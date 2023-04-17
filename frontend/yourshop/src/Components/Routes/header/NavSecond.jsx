import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "./Navsecond.css"

const NavSecond = () => {

  const user = useSelector((store) => store.auth);


  return (
    <div className='new_nav'>
      <div className="nav_data">
        <div className="left_data">
          <Link to='/products' style={{textDecoration: 'none'}}><p>Mens</p></Link>    
          <Link to='/products' style={{textDecoration: 'none'}}><p>Womens</p></Link>
          <Link to='/products' style={{textDecoration: 'none'}}><p>Childrens</p></Link>
          <Link to='/products' style={{textDecoration: 'none'}}><p>New Arriivals</p></Link>
          <Link to='/products' style={{textDecoration: 'none'}}><p>Discounted</p></Link>
        </div>
        <div className="right_data">
        {
          user.isAuthenticated && user.validUser.role == "admin" ? <>
             <Link to='/productDashboard' style={{textDecoration: 'none'}}> <p> Product Dashboard</p> </Link>
            <Link to='/usersDashboard' style={{textDecoration: 'none'}}> <p> User Dashboard</p> </Link>
            <p>You are :- Admin</p>
          </> : <p>You are :- User</p>
        }
        </div>
      </div>
    </div>
  )
}

export default NavSecond
