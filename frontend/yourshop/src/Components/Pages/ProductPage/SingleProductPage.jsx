import axios from 'axios'
import './CSS/SingleProductPage.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Text } from '@chakra-ui/react'

const SingleProductPage = () => {
  const [data,setData]=useState({})
  const {id}=useParams()

  const getData=()=>{
    axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
      // console.log(res.data)
      setData(res.data)
    })
  }

  console.log(data)
  useEffect(()=>{
    getData()
  },[])
  return (
    <div id='singleProductPageDiv'>

      <div id="imageDiv">
      <img src="https://assets.ajio.com/medias/sys_master/root/20210403/AcbB/6068b6caf997dd7b64643def/dennislingo_premium_attire_green_striped_slim_fit_shirt.jpg" alt="" />
      </div>

      <div id="contentDiv">
        <Text  fontSize="lg" as='b'>DENNISLINGO PREMIUM ATTIRE</Text>
        <br />
        <Text fontSize="xs">New Price</Text>
        <Text>Old Price</Text>
        <br />
        <Text fontSize="lg" as='b'>About The Product :</Text>
        <Text>Color : All colors available</Text>
        <Text>Category : Mens</Text>
        <Text>Shipping fee : Free shipping</Text>
          <br />
        <Button>Add To Cart</Button>
      </div>
    </div>
  )
}

export default SingleProductPage
