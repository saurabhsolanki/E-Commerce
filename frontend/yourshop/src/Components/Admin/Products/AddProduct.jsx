import { Button, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../Redux/Product/action'
import './CSS/AddProduct.css'

const init={
    category:"",
    brand:"",
    title:"",
    price:"",
    original_price:"",
    offer_price:"",
    type:"",
    discount:"",
    image:""
}
const AddProduct = () => {
    const [data,setData]=useState(init)
    const dispatch=useDispatch()


    const handleChange=(e)=>{
        // console.log(e.target.value)
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addProduct(data))
        // setData("")
    }


  return (
    <div id='addProductForm'>
        <form onSubmit={handleSubmit}>
        <Text fontSize="3xl">Add New Product</Text>


        <Input type='url' name='image' placeholder='Enter Image URL' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='category' placeholder='Enter category' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='brand' placeholder='Enter brand' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='title' placeholder='Enter Title' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='price' placeholder='Enter price' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='original_price' placeholder='Enter Original Price' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='offer_price' placeholder='Enter Offer Price' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='type' placeholder='Enter Product Type' onChange={(e)=>handleChange(e)}/>

        <Input type="text" name='discount' placeholder='Enter Discount' onChange={(e)=>handleChange(e)}/>

        <Button type="submit" bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}> Submit</Button>
     </form>
    </div>
  )
}

export default AddProduct
