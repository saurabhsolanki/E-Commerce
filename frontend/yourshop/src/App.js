// import Footer from './Components/Pages/HomePage/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AllRoutes from './Components/Routes/AllRoutes';
// import Navbar from './Components/Routes/Navbar';
// import Header from './Components/Routes/Header';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getValidUser } from './Redux/auth/action';


// function App() {


//   const dispatch=useDispatch()
//   const token=JSON.parse(localStorage.getItem("token"))
//   const {isAuthenticated,validUser} = useSelector(store => store.auth)
//   console.log("auth",isAuthenticated,validUser)

//   useEffect(()=>{
//     dispatch(getValidUser(token))
//   },[token])
//   return (
//     <>
//       <Navbar isAuthenticated={isAuthenticated} />
//       <Header/>
//       <AllRoutes/>
//       {/* <Footer/> */}
//     </>
//   );
// }

// export default App;


import Footer from './Components/Pages/HomePage/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './Components/Routes/AllRoutes';
import Header from './Components/Routes/Header';
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getValidUser } from './Redux/auth/action';
import Navbar from './Components/Routes/header/Navbar';
import NavSecond from './Components/Routes/header/NavSecond';


function App() {


  const dispatch=useDispatch()
  const token=JSON.parse(localStorage.getItem("token"))
  const {isAuthenticated,validUser} = useSelector(store => store.auth)
  console.log("auth",isAuthenticated,validUser)

  useEffect(()=>{
    dispatch(getValidUser(token))
  },[token])
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated}/>
      <NavSecond/>
      
  
      {/* <Header/> */}
      <ChakraProvider>
      <AllRoutes/>
      <Footer/>
      </ChakraProvider>
    </>
  );
}

export default App;