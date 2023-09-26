import React, { useEffect, useState } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
// import { getOrderData } from '../../redux/Login/loginAction'
// import NavSecond from '../../component/header/NavSecond'
import { useNavigate } from 'react-router-dom'
// import { Loader } from '../../component/Loading'
import NavSecond from '../../Routes/header/NavSecond'
import { Loader } from '../Loader/Loaders'
import { getOrderData } from '../../../Redux/Cart/action'

const Account = () => {

    const nav = useNavigate()
    const [spin, setspin] = useState(true);

    const {validUser,isAuthenticated} = useSelector((store) => store.auth)
    const {order} = useSelector(store => store.cart)


    console.log(order,validUser,"order")

    const dispatch = useDispatch()
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(token)

    useEffect(() => {
      setTimeout(() => {
        setspin(false);
      }, 1300);
      dispatch(getOrderData(token))
    }, [])



  return (
    <>
          <NavSecond/>
          {
      spin ? (
        <Loader />
      ) : (
        <>
        <div className="acc">
        <div className='acimg'>
        <h1 className='achs'>Account Information</h1>
            <img src={`http://localhost:8080/uploads/${validUser.profile}`} alt=''/>
        
        </div>


        <div className='accorder'>
        <h1 className='ach'>Account Information</h1>
            <h2 className='accht'>First Name:&nbsp;&nbsp;&nbsp;<span className='spanacc'>{validUser.name}</span></h2>
            <h2 className='accht'>Phone No.:&nbsp;&nbsp;&nbsp;<span className='spanacc'>{validUser.phone}</span></h2>
            <h2 className='accht'>Email:&nbsp;&nbsp;&nbsp;<span className='spanacc'>{validUser.email}</span></h2>
        </div>
          
          
      </div>
      {
        order.length > 0 ? <>
          <div className="order_m">
      <h1>Order Details</h1>
      <div className="order_p">
      {order.length > 0 ? (
              order.map((e) => {
                return (
                  <>
                  <div className="order_acc">
                  <h6>Previous Orders</h6>
                  {
                    e.orderItems.map((e)=>(
                        <div className='o_main'>
                        <img
                          src={e.image}
                          alt=""
                        />
                        <div className="o_h">
                        <h3>{e.name}</h3>
                        </div>
                        <div className="o_n">
                            <h4>MRP: ₹{e.price}</h4>
                        <h4>Quantity: {e.quantity}</h4>
                        <h4>{`Sub-total: ₹${e.price * e.quantity}`}</h4>
                        </div>
                    </div>
                    ))
                  }
                  </div>
                  </>
                );
              })
            ) : ""}
      </div>
      </div>
          </> : ""
      }
        </>
      )
}
    </>
  )
}

export default Account