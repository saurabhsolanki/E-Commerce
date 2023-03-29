import { Button, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CSS/signup.css'


const initial = {
    name:"",
    email: "",
    phone: "",
    password: "",
  };

const Signup = () => {
    const [data, setData] = useState(initial);
    const navigate = useNavigate();
    const toast = useToast()
    const {name,email,phone,password}=data

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/user/signup",data).then((res)=>{
            console.log(res.data.message)
            setData({name:"", email:"", phone:"",password:""})
            toast({
                title: `${res.data.message}`,
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
              setTimeout(()=>{
                navigate("/login")
            },1000)
                }).catch((err)=>{
                    console.log(err)
                    // return toast({
                    //     title: `${err.response.data.message}, Please use another email`,
                    //     status: 'error',
                    //     duration: 3000,
                    //     isClosable: true,
                    //   })
                })
      }

  return (
    <div id='signupDiv'>

      <form action="">

        <Text as='b' fontSize="4xl">SignUP</Text>

        <label htmlFor="">Name</label>
        <div>
        <i class="fa-solid fa-user"></i>
        <Input type="text" placeholder='Enter Your Name' variant='unstyled' name='name' onChange={handleChange} required={true} value={name || ""}/>
        </div>

        <label htmlFor="">Email</label>
        <div>
        <i class="fa-solid fa-envelope"></i>
        <Input type="email" placeholder='Enter Your Email' variant='unstyled' name='email' onChange={handleChange} required={true} value={email || ""}/>
        </div>

        <label htmlFor="">Phone</label>
        <div>
        <i class="fa-solid fa-phone"></i>
        <Input type="text" placeholder='Enter Your Phone Number' variant='unstyled' name='phone' onChange={handleChange} required={true} value={phone || ""}/>
        </div>
        <label htmlFor="">Password</label>
        <div>
        <i class="fa-solid fa-lock"></i>
        <Input type="password" placeholder='Enter Your Password' variant='unstyled' name='password' onChange={handleChange} required={true} value={password || ""}/>
        </div>
        <br />
        <Button bg={'#44727d'} color={'white'} _hover={{bg: '#305766'}} onClick={(e)=>handleSubmit(e)}>Submit</Button>

        <Text fontSize="sm">Already Have an Account <Link to='/login'>Login</Link> </Text>
      </form>
    </div>
  )
}

export default Signup
