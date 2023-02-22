import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Input, Select, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './CSS/AllProduct.css'
import Filter from './Filtering'

const AllProductPage = () => {
  const [data,setData]=useState([])
  const [cat,setCat]=useState("all")
  const [search,setSearch]=useState("")
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(12)
  const [sort, setSort] = useState("asc");
  
  const getData=()=>{
    axios.get(`http://localhost:8080/products?search=${search}&category=${cat}&page=${page}&limit=${limit}&orderBy=offer_price&order=${sort}`).then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  }
  
  useEffect(()=>{
    getData()
  },[cat,search,page,limit,sort])

  console.log(sort)
  return (
    <div>
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
          <option value='15'>15</option>
          <option value='18'>18</option>
          <option value='21'>21</option>
        </Select>
        </div>



        <div id="pageNumber">
        <Button disabled={page===1} onClick={(prev)=>setPage(page-1)} >Prev Page</Button>
        <Text as='b'>Page No:- {page}</Text>
        <Button onClick={(prev)=>setPage(page+1)}>Next Page</Button>
        </div>
      </div>
    
        </div>
      <div id="productList">
        {

          data?.map((e,i) => (
             <div id='singleProduct' key={e._id}>
              <Link to={`/products/${e._id}`}>

                  <img src={e.image} alt="" />
                  <h1 style={{ maxWidth: "30ch", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap",fontSize: "large", fontWeight:"bolder" }} >{e.title}</h1>
                    <Text fontSize="xs" as='b'>Brand:- {e.brand}</Text>
                    <div id="productPrice">
                      <div id="productMrp">
                        <Text fontSize="xs" as="s" color='tomato'>{e.original_price}{" "}</Text>
                        <Text color="black" fontSize="sm" as='b'>₹{" "} {e.offer_price}</Text>
                        <Text color="black" fontSize="s">{" "} {e.category}</Text>
                      </div>
                    </div>
                    
                    <Text color="teal" fontSize="xs">Free Shipping</Text>

                    <div id="productButton">
                      <Button color="white"  variant='outline' className="btn1" width="100%">
                      {/* <Link to={`/producst/${e._id}`}> SEE DETAILS</Link> */}
                      SEE DETAILS
                        </Button>
                    </div>

              </Link>
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default AllProductPage
