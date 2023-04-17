import axios from "axios";
import { addToCartSuccess, deleteToCartSuccess, GET_ORDER_DATA, Get_Order_Success, SHIPPING_INFO } from "./actionType";



export const addCartItems = (id,quantity) => async(dispatch,getState) => {

    const {data} = await axios.get(`http://localhost:8080/products/${id}`)
    console.log("cartDAta in redux",data)
    dispatch({
        type: addToCartSuccess,
        payload:{
            _id: data._id, 
            name: data.title,
            price: data.price,
            image: data.image,
            quantity
        }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}

export const removeCartItems = (id) => async(dispatch,getState) => {
    // console.log(id)
    dispatch({
        type: deleteToCartSuccess,
        payload: id
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}

export const shippingInfo = (data) => async(dispatch,getState) => {
    // console.log(id)
    dispatch({
        type: SHIPPING_INFO,
        payload: data
    })
    localStorage.setItem("shipping", JSON.stringify(data))
}

export const getOrderSuccess = (payload) =>{
    return {
        type: Get_Order_Success,
        payload
    }
    
}


export const getOrderData = (token,id) => async(dispatch) =>{

    const {data} = await axios.get(`http://localhost:8080/order/${id}`,{
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
        },
    })
    console.log(data)
    dispatch({
        type: GET_ORDER_DATA,
        payload: data
    })

}