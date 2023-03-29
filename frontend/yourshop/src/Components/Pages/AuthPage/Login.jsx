import { Button, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi } from '../../../Redux/auth/action';
import './CSS/login.css'

const initial = {
    email: "",
    password: "",
  };

const Login = () => {
    const [data, setData] = useState(initial);
    const navigate = useNavigate();
    const toast = useToast()
    const dispatch=useDispatch()
    const token =JSON.parse(localStorage.getItem("token"))


    function handleChange(e) {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        // axios.post("http://localhost:8080/user/login",data).then((res)=>{
        //     console.log(res.data)
        //     toast({
        //         title: `${res.data.message}`,
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: true,
        //       })
        //       setTimeout(()=>{
        //         navigate("/products")
        //     },1000)
        //         }).catch((err)=>{
        //             console.log(err.response.data)
        //             return toast({
        //                 title: `${err.response.data.message}`,
        //                 status: 'error',
        //                 duration: 3000,
        //                 isClosable: true,
        //               })
        //         })
        dispatch(LoginApi(data,toast,navigate))
      }

  return (
    <div id='loginDiv'>

      <form action="">

        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="" />

        <Text as='b' fontSize="4xl">Login</Text>
        <br />

        <label htmlFor="">Email</label>
        <div>
        <i class="fa-solid fa-user"></i>
        <Input type="text" placeholder='Enter Your Email' variant='unstyled' name='email' onChange={handleChange} />
        </div>

        <label htmlFor="">Password</label>
        <div>
        <i class="fa-solid fa-lock"></i>
        <Input type="text" placeholder='Enter Your Password' variant='unstyled' name='password' onChange={handleChange} />
        </div>
        <br />
        <Button bg={'#44727d'} color={'white'} _hover={{bg: '#305766'}} onClick={(e)=>handleSubmit(e)}>Submit</Button>
            <br />
        <Text fontSize="sm">Don't Have an Account <Link to='/signup'>SignUp</Link> </Text>
      </form>
    </div>
  )
}

export default Login
