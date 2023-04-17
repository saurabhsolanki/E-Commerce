import { Button, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CSS/signup.css'


const initial = {
    name:"",
    email: "",
    phone: "",
    password: "",
  };

const Signup = () => {
    const [sdata, setData] = useState(initial);
    const navigate = useNavigate();
    const toast = useToast()
    const {name,email,phone,password}=sdata

     // to set the image
  const [image, setimage] = useState("");
  const [previewImage, setpreviewImage] = useState("");
  const setProfile = (e) => {
    setimage(e.target.files[0]);
  };


    function handleChange(e) {
        const { name, value } = e.target;
        setData({
          ...sdata,
          [name]: value,
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();

        const {name,email,phone,password} = sdata;
        
        const data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        data.append("phone", phone);
        data.append("user_profile", image);
        const config = {
          headers:{
            "Content-Type": "multipart/form-data",
          }
        }
        axios.post('http://localhost:8080/user/signup',
          data,
          config
        ).then((res) => {
          console.log(res)
          alert('Sign up Successfully.')
          setTimeout(()=>{
                    navigate("/login")
          },1000)
        }).catch((error) => {
          alert('This email address already exist.')
          console.log(error)
        });
        // axios.post("http://localhost:8080/user/signup",data).then((res)=>{
        //     console.log(res.data.message)
        //     setData({name:"", email:"", phone:"",password:""})
        //     toast({
        //         title: `${res.data.message}`,
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: true,
        //       })
        //       setTimeout(()=>{
        //         navigate("/login")
        //     },1000)
        //         }).catch((err)=>{
        //             console.log(err)
        //             return toast({
        //                 // title: `${err.response.data.message}, Please use another email`,
        //                 status: 'error',
        //                 duration: 3000,
        //                 isClosable: true,
        //               })
        //         })
      }


      useEffect(() => {
        if (image) {
          setpreviewImage(URL.createObjectURL(image));
        }
      }, [image]);


  return (
    <div id='signupDiv'>

      <form action="">

      <img 
      src={
        previewImage
          ? previewImage
          : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
      }
       alt="" />

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
        <label htmlFor="">Image</label>
        <div>
        <i class="fa-solid fa-image"></i>
        <Input type="file" placeholder='Choose Your Profile' variant='unstyled' name="user_profile" onChange={setProfile} required={true}/>
        </div>
        <br />
        <Button bg={'#44727d'} color={'white'} _hover={{bg: '#305766'}} onClick={(e)=>handleSubmit(e)}>Submit</Button>

        <Text fontSize="sm">Already Have an Account <Link to='/login'>Login</Link> </Text>
      </form>
    </div>
  )
}

export default Signup
