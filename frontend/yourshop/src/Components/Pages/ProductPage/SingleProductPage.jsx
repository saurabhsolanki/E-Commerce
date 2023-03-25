import axios from 'axios'
import './CSS/SingleProductPage.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addCartItems } from '../../../Redux/Cart/action'

const SingleProductPage = () => {
  const [data,setData]=useState({})
  const {id}=useParams()
  const [qua,setQua]=useState(1)
  const dispatch=useDispatch()

  const getData=()=>{
    axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
      // console.log(res.data)
      setData(res.data)
    })
  }

  function ADDTOCART(){
   try {
    dispatch(addCartItems(id,qua))
   } catch (error) {
    console.log("addtocart error",error)
   }
  }

  console.log("single",data)
  useEffect(()=>{
    getData()
  },[])
  return (
    <div id='singleProductPageDiv'>

      <div id="imageDiv">
      <img src={data.image} alt="" />
      </div>

      <div id="contentDiv">
        <Text  fontSize="lg" as='b'>{data.brand}</Text>
        <br />
        <Text fontSize="xs">New Price: {data.offer_price}</Text>
        <Text>Old Price :{data.original_price}</Text>
        <br />
        <Text fontSize="lg" as='b'>About The Product :</Text>
        <Text>Color : All colors available</Text>
        <Text>Category : {data.category}</Text>
        <Text>Type : {data.type}</Text>
        <Text>Shipping fee : Free shipping</Text>
          <br />

         <Box>
         <Button isDisabled={qua===1} onClick={()=>setQua(qua-1)}>-</Button>
          <Text as='b'>{qua}</Text>
          <Button isDisabled={qua===5} onClick={()=>setQua(qua+1)}>+</Button>
         </Box>
        <Button onClick={ADDTOCART}>Add To Cart</Button>
      </div>
    </div>
  )
}

export default SingleProductPage
