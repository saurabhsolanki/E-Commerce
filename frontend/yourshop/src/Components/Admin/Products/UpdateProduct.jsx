import { Button, Input, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import './CSS/updateProductModal.css'
import { useDispatch } from 'react-redux'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { updateProduct } from '../../../Redux/Product/action'


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
const UpdateProductModal = ({item}) => {
    const id=item._id

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    const [data,setData]=useState({...item})
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        dispatch(updateProduct(id,data))
    }
  return (
    <div>
       <Button ref={btnRef} colorScheme='green' onClick={onOpen}>
        Edit
      </Button>
      <Drawer size={"md"}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update Product</DrawerHeader>
          <div id="singleProductModal">
                <img src={item.image} alt="" width="150px"/>
                
                <div>
                <Text style={{ maxWidth: "30ch", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}> <strong>Title</strong> :- {item.title}</Text>
                <Text > <strong>Brand</strong> :- {item.brand}</Text>
                <Text > <strong>Category</strong> :- {item.category}</Text>
                <Text > <strong>Price</strong> :- ₹{item.offer_price}</Text>
                </div>
              </div>

          <DrawerBody id='updateProductModal'>

            <div>
                <Text as='b'>Image:-</Text>
            <Input type='url' name='image' placeholder='Enter Image URL'  onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <Text as='b'>Category:-</Text>
            <Input type='text' name='category' placeholder='Enter category' onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <Text as='b'>Brand:-</Text>
            <Input type="text" name='brand' placeholder='Enter brand'  onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <Text as='b'>Title:-</Text>
            <Input type="text" name='title' placeholder='Enter Title' onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <Text as='b'>Price:-</Text>
            <Input type="text" name='price' placeholder='Enter price'   onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
            <Text as='b'>Original_Price:-</Text>
            <Input type="text" name='original_price' placeholder='Enter Original Price'  onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <Text as='b'>Offer_Price:-</Text>
            <Input type="text" name='offer_price' placeholder='Enter Offer Price'  onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <Text as='b'>Type:-</Text>
            <Input type="text" name='type' placeholder='Enter Product Type'  onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <Text as='b'>Discount:-</Text>
            <Input type="text" name='discount' placeholder='Enter Discount'  onChange={(e)=>handleChange(e)}/>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={handleSubmit}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default UpdateProductModal
