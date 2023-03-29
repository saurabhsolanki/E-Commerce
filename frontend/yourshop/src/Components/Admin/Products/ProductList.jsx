import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Select,
    Button,
    Text,
    Input,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, getProducts } from '../../../Redux/Product/action'
import axios from 'axios'
import Filter from './Filtering'
import { SingleProductModal } from './SingleProductModal'
import UpdateProductModal from './UpdateProduct'

const ProductList = () => {


  // const data=useSelector(store=>store.products.data)
  const [data, setdata] = useState([])
  const dispatch=useDispatch()
  const [cat,setCat]=useState("all")
  const [search,setSearch]=useState("")
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(3)
  const [sort, setSort] = useState("asc");

   async function getData() {

    try {
      const res = await fetch(`http://localhost:8080/products?search=${search}&category=${cat}&page=${page}&limit=${limit}&orderBy=offer_price&order=${sort}`)
      const data = await res.json()
      console.log(data)
      setdata(data)
    } catch (error) {
      console.log(error)
    }
    dispatch(getProducts(cat,search,page,limit,sort))
  }
  

  const handleDelete=async(id)=>{

    await axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
        console.log("res del data",res.data)
        dispatch(getProducts())
        alert("Item Deleted")
    }).then((res)=>{
     console.log(res)
     getData()
    }).catch((er)=>{
      console.log(er)
    })
    // console.log(res)
    // dispatch(deleteProduct(id))
    // alert("Product Deleted Succesfully")
  }

  useEffect(()=>{
    getData()
  },[cat,search,page,limit,sort,data.length])

  return (
    <>

    <div id='productListContainer'>
              <div id="sortingAndfiltering">

                <div id="filtering">
                  <div id="filter">
                    <Filter setCat={setCat}/>
                    <Input type="text" placeholder='Serach By Brand Here...' onChange={(e)=>setSearch(e.target.value)}/>
                  </div>
                  <div id="sortBy">
                    <Text as='b'>Sort By Price:-</Text>
                    <Button onClick={()=>setSort("asc")}>Low To High</Button>
                    <Button onClick={()=>setSort("desc")}>High To Low</Button>
                  </div>
                </div>

                <div id="paginationDiv">
                  <div id="pageLimit">
                    <Select placeholder='Set Limit' onChange={(e)=>setLimit(e.target.value)}>
                      <option value='3'>3</option>
                      <option value='5'>5</option>
                      <option value='8'>8</option>
                    </Select>
                  </div>

                  <div id="pageNumber">
                    <Button disabled={page===1} onClick={(prev)=>setPage(page-1)} >Prev Page</Button>
                    <Text as='b'>Page No:- {page}</Text>
                    <Button onClick={(prev)=>setPage(page+1)}>Next Page</Button>
                  </div>
                </div>

              </div>
    <div style={{marginTop:"150px"}} id="homeDiv">

      <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>No.</th>
                <th style={{textAlign:"center"}}>Image</th>
                <th style={{textAlign:"center"}}>Title</th>
                <th style={{textAlign:"center"}}>Brand</th>
                <th style={{textAlign:"center"}}>category</th>
                <th style={{textAlign:"center"}}>Offer Price</th>
                <th style={{textAlign:"center"}}>Original price</th>
                <th style={{textAlign:"center"}}>Type</th>
                <th style={{textAlign:"center"}}>Discount</th>
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <th scope='row'>{index+1}</th>
                            <td><img src={item.image} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td>₹{item.offer_price}</td>
                            <td>{item.original_price}</td>
                            <td>{item.type}</td>
                            <td>{item.discount}</td>
                            <td>
                                <UpdateProductModal item={item}/>
 
                                <button className="btn btn-delete" onClick={()=>handleDelete(item._id)}>Delete</button>
                                <>
                                <SingleProductModal data={item}/>
                                </>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}

export default ProductList
