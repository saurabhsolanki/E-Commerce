import React from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
import './CSS/AdminProductPage.css'

const AdminProductPage = () => {
  return (
    <div id='adminProductPage'>
      <AddProduct/>
      <ProductList/>
    </div>
  )
}

export default AdminProductPage
