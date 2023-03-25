import Footer from './Components/Pages/HomePage/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './Components/Routes/AllRoutes';
import Navbar from './Components/Routes/Navbar';
import Header from './Components/Routes/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getValidUser } from './Redux/auth/action';


function App() {
  const dispatch=useDispatch()
  const token=JSON.parse(localStorage.getItem("token"))
  console.log("token of valid",token)

  useEffect(()=>{
    dispatch(getValidUser(token))
  },[])
  return (
    <div>
      <Navbar/>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
