import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import '../CSS/navbar.css'
import logoImg from '../assets/logo.png'
function Header(){
  const location=useLocation();
  const [disp,setDisp]=useState(false);
  useEffect(()=>{
      setDisp(false);
  },[location.pathname]);

    return(
      <nav  className="navbar navbar-expand-lg bg-body-tertiary" style={{zIndex:"4000"}}>
      <div  className="container-fluid">
        <Link to="#"  className="navbar-brand" ><img src={logoImg} alt="" width="40px" height="40px" /></Link>
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon" onClick={()=>setDisp(disp=>(!disp))}></span>
        </button>
        <div  className="collapse navbar-collapse" style={disp ? {display:"block"} : {display:"none"}} id="navbarSupportedContent">
          <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
            <li  className="nav-item">
              <IoHomeOutline   className="fs-4 nav-icon"/>
              <Link to="/Anukriti"  className="nav-link active" aria-current="page"  >Home</Link>
            </li>
            <li  className="nav-item" style={{marginTop:"5px"}}>
            <MdOutlineExplore   className="fs-4 nav-icon category" style={{position:"relative",left:"5px",}}/>
              <Link to="/Anukriti/explore"  className="nav-link " aria-disabled="true" style={{paddingLeft:"9px"}}><span style={{marginLeft:"-5px"}}>Explore</span></Link>
            </li>
            <li  className="nav-item">
            <MdOutlineEdit   className="fs-4 nav-icon"/>
              <Link to="/Anukriti/create"  className="nav-link"  >Write</Link>
            </li>

            <li  className="nav-item">
            <CgProfile   className="fs-4 nav-icon"/>
              <Link to="/Anukriti/sign"  className="nav-link " aria-disabled="true">Sign In</Link>
            </li>
            <li  className="nav-item">
            <CgProfile   className="fs-4 nav-icon"/>
              <Link to="/Anukriti/profile/self"  className="nav-link " aria-disabled="true">Profile</Link>
            </li>
            
            <li  className="dropdown nav-dropdown">
              <button  className="btn btn-primary dropdown-toggle text-white py-2 border-2 border-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Language
             </button>
              <ul  className="dropdown-menu">
              <li><Link to="#"  className="dropdown-item"  >English</Link></li>
             <li><Link to="#"  className="dropdown-item"  >Hindi</Link></li>
             <li><Link to="#"  className="dropdown-item disabled"  >Upcoming Language</Link></li>
            </ul>
</li>
           
          </ul>
          <form  className="d-flex" role="search">
            <input  className="form-control me-2"type="search" placeholder="Search Stories/Poems" aria-label="Search"/>
            <button  className="btn btn-outline-success" type="submit"><IoSearchOutline/></button>
          </form>
        </div>
      </div>
    </nav>
    
    )
}
export default Header;