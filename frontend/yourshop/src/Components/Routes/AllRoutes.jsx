import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProductPage from '../Admin/Products/AdminProductPage'
import UsersList from '../Admin/Users/UsersList'
import Login from '../Pages/AuthPage/Login'
import Signup from '../Pages/AuthPage/Signup'
import UserAccount from '../Pages/AuthPage/UserAccount'
import Cart from '../Pages/Cart/Cart'
import HomePage from '../Pages/HomePage/HomePage'
import Payment from '../Pages/Payment/Payment'
import AllProductPage from '../Pages/ProductPage/AllProductPage'
import SingleProductPage from '../Pages/ProductPage/SingleProductPage'
import Order from '../Pages/Shipping/Order'
import Shipping from '../Pages/Shipping/Shipping'
import Account from '../Pages/Account/Account'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<AllProductPage/>}/>
        <Route path='/products/:id' element={<SingleProductPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/productDashboard' element={<AdminProductPage/>}/>
        <Route path='/usersDashboard' element={<UsersList/>}/>
        <Route path='/userAccount' element={<UserAccount/>}/>
        <Route path='/cartPage' element={<Cart/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/account' element={<Account/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes
