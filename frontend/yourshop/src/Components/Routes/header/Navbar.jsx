import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Drawer from '@mui/material/Drawer';
import axios from "axios";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from "react";
import ResponsiveNav from "./ResponsiveNav";
import { getLogoutUser } from "../../../Redux/auth/action";


const Navbar = ({isAuthenticated}) => {

  // console.log(user,isAuthenticated)

  const nav = useNavigate()

  const [search, setsearch] = useState("")
  const [data, setdata] = useState([])
  const [cat,setCat]=useState("all")
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(12)
  const [sort, setSort] = useState("asc");
  const user = useSelector((store) => store.auth);
  const [open, setopen] = useState(false)
  const [loginopen, setloginopen] = useState(false)
  const [drawer, setdrawer] = useState(false)

  const dispatch = useDispatch();

  const getTodos = () => {

    return axios
      .get(`http://localhost:8080/products?search=${search}&category=${cat}&page=${page}&limit=${limit}&orderBy=offer_price&order=${sort}`)
      .then((res) => {
        // console.log(res.data)
        setdata(res.data)
        setopen(true)
      })
      .catch((err) => {
        // dispatch(getProductsFailure());
      });
  };

  // drawer 
  const handleDrawer=()=>{
    setdrawer(false)
  }


  // log out
  const logoutuser = async() => {
    setloginopen(false)
    let token = JSON.parse(localStorage.getItem("token"));
    // console.log(token)

    const res = await fetch("http://localhost:8080/user/logoutuser", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            Accept: "application/json"
        }
    });

    const data = await res.json();

    if (data.status == 201) {
      dispatch(getLogoutUser())
      isAuthenticated=false
      // nav("/")
        alert('User logged out Successfully')
        localStorage.removeItem("token");
    } else {
    }
}

  const admin = () => {
    setloginopen(false)
    if(user.login.role === "admin"){
      nav('/admin')
    }
    else{
      alert('Sorry you are not an Admin!')
    }
  }

  const searchbox = () => {
    setopen(false)
    setsearch("")
  }

  const accountt = () =>{
    setloginopen(false)
    nav('/account')
  }

  console.log(drawer)
  
  useEffect(() => {
    getTodos();
  }, [search]);

  return (
    <>
    <header>
      <nav>
        <div className="left">


           <IconButton className="hamburgur" onClick={()=>{setdrawer(true)}}>
            <MenuIcon style={{color:"#fc2779", fontSize: "30px" }} />
          </IconButton>

          <Drawer open={drawer} onClose={handleDrawer}>
            <ResponsiveNav user={user} isAuthenticated={isAuthenticated} drawerr={handleDrawer}/>
          </Drawer>

          <div className="navlogo">
            <Link to='/'>
            <img
              src="https://i.postimg.cc/mrWqF7H1/YOurShop.png"
              alt=""
            /></Link>
          </div>
          <div className="nav_searchbaar">
            <input
              placeholder="Search on YourShop"
              type="text"
              onChange={(e)=>setsearch(e.target.value)}
              style={{ fontSize: "17px", textAlign: "center", 
              backgroundColor:"gray" }}
              value={search}
            />
            <div className="search_icon">
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ color: "white" }}
              ></i>
            </div>
            {/* search */}
            {
              search && open && <div className="searchbox" >
                {
                  data.map((e,i)=>{
                    return(
                      <>
                      <Link to={`/products/${e._id}` }>
                      <div className="list_div" onClick={searchbox}>
                        <img style={{height:"60px", width:"80px"}} src={e.image} alt=''/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {e.brand}
                        </div>
                      </Link>
                      </>
                    )
                  })
                }
            </div>
            }
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            {
              isAuthenticated ? <>
                <a onClick={()=>{setloginopen(!loginopen)}}>{user.validUser.name}&nbsp;&nbsp;<i class="fa-solid fa-angle-down"></i></a>
                {
                  loginopen ? <>
                    <div className="loginbox">
                      <div className="account" onClick={()=>{accountt()}} >
                        <h1>My Account</h1>
                      </div>
                      <div className="logout" onClick={()=>{logoutuser()}} >
                        <h1>Logout</h1>
                      </div>
                      <div className="adminn" onClick={()=>admin()} >
                        <h1>Admin Panel</h1>
                      </div>
                    </div>
                  </> : ""
                }
              </>
                 : 
              <Link to='/signup' ><a className="signupButton">&nbsp;&nbsp;&nbsp;Signin</a></Link>
            }
          </div>
          <div className="cart_btn" >
          <Link to='/cart'>
            {/* Cart */}
             <i class="fa-solid fa-shopping-cart" style={{ fontSize: "30px", color: "yellow"}} ></i>
          </Link>
          </div>   
        </div>
      </nav>
    </header>
    </>
  );
};

export default Navbar;
