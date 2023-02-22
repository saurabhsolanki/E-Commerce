import axios from "axios";
import { login_success } from "./authType";

export const LoginApi = (creds,toast,navigate) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/user/login", creds);
    dispatch({ type: login_success, payload: res.data });
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

export const signupPost=(data)=>(dispatch)=>{
  axios.post("http://localhost:8080/signup",data).then((res)=>{
      alert("Signup Success")
  })
}