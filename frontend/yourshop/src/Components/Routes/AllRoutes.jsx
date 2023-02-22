import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/AuthPage/Login'
import Signup from '../Pages/AuthPage/Signup'
import HomePage from '../Pages/HomePage/HomePage'
import AllProductPage from '../Pages/ProductPage/AllProductPage'
import SingleProductPage from '../Pages/ProductPage/SingleProductPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<AllProductPage/>}/>
        <Route path='/products/:id' element={<SingleProductPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes
