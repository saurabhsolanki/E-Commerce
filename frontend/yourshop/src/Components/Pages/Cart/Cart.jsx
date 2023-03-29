import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addCartItems, removeCartItems } from "../../redux/Cart/CartAction";
import "./cart.css";
import { addCartItems, removeCartItems } from "../../../Redux/Cart/action";
// import { Loader } from "../../component/Loading";
// import NavSecond from "../../component/header/NavSecond";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart.cartItems);
  console.log(cart)
  const cartlength = JSON.parse(localStorage.getItem('cart')) || []

  console.log(cart)

  // const {login,isAuthenticated} = useSelector((store) => store.login);
  const nav = useNavigate();

  const incQuantity = (e) => {
    const id = e._id;
    const newquan = e.quantity + 1;
    // console.log(id, newquan);
    dispatch(addCartItems(id, newquan));
  };

  const decQuantity = (e) => {
    const id = e._id;
    const newquan = e.quantity - 1;
    // console.log(id, newquan);
    dispatch(addCartItems(id, newquan));
  };

  let subtotal;

  if(cart){
     subtotal = cart.reduce((acc, e) => acc + e.quantity * e.price, 0);
  }

  // console.log(login,isAuthenticated)

  const ship = () => {
    // if (isAuthenticated != undefined) {
      nav("/shipping");
    // } else {
    //   nav("/signup");
    // }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setspin(false)
  //   }, 1300);
  // },[])

  const shipp = subtotal > 2000 ? 0 : 100

  return (
    <>
     {/* <NavSecond/> */}
    {
      <>
      <div className="fir_div" style={cartlength.length == 0 ? {display : 'none'} : {display : ''}  }>
      <div className="bagsumm">
        <h1>Bag Summary</h1>
        {cart.length > 0 ? (
          cart.map((e) => {
            return (
              <>
                <div className="cartpg">
                  <img
                    src={e.image}
                    alt=""
                  />
                  <div className="pri">
                    <h3>{e.name}</h3>
                    <h4>MRP: ₹{e.price}</h4>
                    <h5>{`Sub-total: ₹${e.price * e.quantity}`}</h5>
                  </div>
                  <div className="btnsspg">
                    <i
                      class="fa-solid fa-square-plus"
                      onClick={() => {
                        incQuantity(e);
                      }}
                      style={{ color: " #fc2779", fontSize: "19px" }}
                    ></i>
                    <h2>{e.quantity}</h2>
                    <i
                      class="fa-solid fa-square-minus"
                      onClick={() => {
                        decQuantity(e);
                      }}
                      style={{ color: " #fc2779", fontSize: "19px"}}
                    ></i>
                    <i 
                    class="fa-solid fa-trash"
                    onClick={() => {
                      dispatch(removeCartItems(e._id));
                    }}
                    id="tss"
                    // style={{ color: "black", fontSize: "24px" }}
                  ></i>
                  </div>
                </div>
              </>
            );
          })
        ) : <>
         
        </>}
      </div>
      <div className="priDet" >
        <h1>Price Details</h1>
        <div className="prid">
        <div className="cartpri">
            <h3>Total Items:</h3>
            <h3>{cart.length}</h3>
          </div>
          <div className="cartpri">
            <h3>Total Price:</h3>
            <h3>₹{subtotal}</h3>
          </div>
          <div className="cartpri">
            <h3>Shipping Price:</h3>
            <h3>₹{shipp}</h3>
          </div>
          <button className="pbtn" onClick={ship}>Proceed To Checkout</button>
        </div>
      </div>

    </div>
          <div className="gif"  style={cartlength.length > 0 ? {display : 'none'} : {display : 'block'}} onClick={()=>{nav('/products')}}>
            <img src='https://media.tenor.com/iFi3jJDlevMAAAAi/shopping-buy.gif' />
            <h2>Your shopping bag is Empty</h2>
            <h3>Start Shopping &nbsp;<i class="fa-solid fa-cart-shopping"></i></h3>
          </div>
    </>
    }
    </>
  );
};

export default Cart;
