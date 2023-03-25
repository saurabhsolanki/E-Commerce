


import axios from "axios";
import { getProductSuccess } from "./ProductType";

export const addProduct=(data)=>(dispatch)=>{
    console.log("add",data)
    axios.post("http://localhost:8080/products",data).then((res)=>{
        // dispatch(getProducts())
        alert("Product Added")
    }).catch((err)=>{
        console.log(err.response.data.message)
    })
}

export const getData=()=>{
    
}

export const getProducts=(cat,search,page,limit,sort)=>(dispatch)=>{
    axios.get(`http://localhost:8080/products?search=${search}&category=${cat}&page=${page}&limit=${limit}&orderBy=offer_price&order=${sort}`).then((res)=>{
        // console.log("res data",res.data)
        dispatch({type:getProductSuccess,payload:res.data})
    })
}

export const deleteProduct=(id)=>(dispatch)=>{
axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
    console.log("res del data",res.data)
    dispatch(getProducts())
    alert("Item Deleted")
})
}
export const updateProduct=(id,data)=>(dispatch)=>{
axios.patch(`http://localhost:8080/products/${id}`,data).then((res)=>{
    dispatch(getProducts())
    alert("Item Updated")
})
}