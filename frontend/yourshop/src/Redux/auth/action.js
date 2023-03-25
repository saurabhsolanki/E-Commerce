import axios from "axios";
import { all_user_success, login_success, user_deleted, VALID_USER } from "./authType";

export const LoginApi = (creds,toast,navigate) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/user/login", creds);
    dispatch({ type: login_success, payload: res.data });
    console.log("userData",res.data)
    localStorage.setItem("token", JSON.stringify(res.data.token))
    toast({
      title: `${res.data.message}`,
      description: `${res.data.user} Welcome to Our Website`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setTimeout(()=>{
      navigate("/products")
  },1000)
  } catch (err) {
    return toast({
      title: `${err.response.data.message}`,
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
};

export const getAllUser=(data)=>(dispatch)=>{
  axios.get("http://localhost:8080/user").then((res)=>{
    dispatch({ type: all_user_success, payload: res.data });
    // console.log(res.data.data,"res al us data")
  })
}

export const deleteUser=(id)=>(dispatch)=>{
  axios.delete(`http://localhost:8080/user/${id}`).then((res)=>{
    dispatch(getAllUser())
  })
}

export const getValidUser=(token)=>(dispatch)=>{
 axios.get('http://localhost:8080/user/validuser',{
  headers:{
    "Content-Type":"application-json",
    "Authorization":token
  }
 }).then((res)=>{

  dispatch({type:VALID_USER,payload:res.data})
  console.log("validuser token",res)
 }).catch((err)=>{
  console.log(err)
})
}