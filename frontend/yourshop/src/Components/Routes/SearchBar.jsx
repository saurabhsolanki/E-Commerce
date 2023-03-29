import { Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [data,setData]=useState([])
    const [cat,setCat]=useState("all")
    const [search,setSearch]=useState("")
    const [page,setPage]=useState(1)
    const [limit,setLimit]=useState(12)
    const [sort, setSort] = useState("asc");
    const [open, setopen] = useState(false)
    
    const getData=()=>{
      axios.get(`http://localhost:8080/products?search=${search}&category=${cat}&page=${page}&limit=${limit}&orderBy=offer_price&order=${sort}`).then((res)=>{
        console.log("search data",res.data)
        setData(res.data)
      })
    }

      const searchbox = () => {
    // setopen(false)
    // setSearch("")
    // console.log(search)
    // console.log("fghyjuikl")
  }
    
    useEffect(()=>{
      getData()
    },[cat,search,page,limit,sort])


  return (
    <> 
    <div>
      <Input variant='filled' placeholder='Search Your Product...' onChange={(e)=>setSearch(e.target.value)} value={search}/>
    </div>

                {
               search && <ListGroup className="searchbox" >
                 {
                   data.map((e,i)=>{
                     return(
                       <>
                       {/* <Link to={`/product/${e._id}` }> */}
                       <ListGroup.Item onClick={searchbox}>
                         <img style={{height:"50px", width:"50px"}} src={e.image} alt=''/>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                         {e.brand}hdosd
                         </ListGroup.Item>
                       {/* </Link> */}
                       </>
                     )
                   })
                 }
             </ListGroup>
             }

    </>
  )
}

export default SearchBar





// const [search, setsearch] = useState("")
//   const [sort, setsort] = useState("desc")
//   const [category, setcategory] = useState("All")
//   const [open, setopen] = useState(false)


//   const product = useSelector((store) => store.products.products);
//   const dispatch = useDispatch();


//   const getTodos = () => {
//     dispatch(getProductsRequest());


//     return axios
//       .get(`http://localhost:8000/products?search=${search}&category=${category}&sort=${sort}`)
//       .then((res) => {
//         // console.log(object)
//         dispatch(getProductsSuccess(res.data));
//         setopen(true)
//       })
//       .catch((err) => {
//         dispatch(getProductsFailure());
//       });
//   };


//   // console.log(product)


//   const searchbox = () => {
//     setopen(false)
//     setsearch("")
//     // console.log(search)
//     // console.log("fghyjuikl")
//   }
 
//   useEffect(() => {
//     getTodos();
//   }, [search]);









// {/* search */}
// 		<input
//               placeholder="Search on  Glow girl"
//               type="text"
//               onChange={(e)=>setsearch(e.target.value)}
//               style={{ fontSize: "17px", textAlign: "center",
//               backgroundColor:"rgb(246, 236, 236)" }}
//               value={search}
//             />


//             {
//               search && open && <ListGroup className="searchbox" >
//                 {
//                   product.map((e,i)=>{
//                     return(
//                       <>
//                       <Link to={`/product/${e._id}` }>
//                       <ListGroup.Item onClick={searchbox}>
//                         <img style={{height:"50px", width:"80px", border:"1px solid red"}} src={e.images} alt=''/>
//                         &nbsp;&nbsp;&nbsp;&nbsp;
//                         {e.name}
//                         </ListGroup.Item>
//                       </Link>
//                       </>
//                     )
//                   })
//                 }
//             </ListGroup>
//             }
