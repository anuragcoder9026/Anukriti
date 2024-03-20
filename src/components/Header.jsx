import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from 'react';
import '../CSS/navbar.css'

function Header(){
    return(
      <nav  className="navbar navbar-expand-lg bg-body-tertiary">
      <div  className="container-fluid">
        <Link to="#"  className="navbar-brand" ><img src="./logo.png" alt="" width="40px" height="40px" /></Link>
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
            <li  className="nav-item">
              <IoHomeOutline   className="fs-4 nav-icon"/>
              <Link to="/Anukriti"  className="nav-link active" aria-current="page"  >Home</Link>
            </li>
            <li  className="nav-item">
            <MdOutlineExplore   className="fs-4 nav-icon category"/>
              <Link to="/explore"  className="nav-link " aria-disabled="true">Explore</Link>
            </li>
            <li  className="nav-item">
            <MdOutlineEdit   className="fs-4 nav-icon"/>
              <Link to="/create"  className="nav-link"  >Write</Link>
            </li>

            <li  className="nav-item">
            <CgProfile   className="fs-4 nav-icon"/>
              <Link to="/sign"  className="nav-link " aria-disabled="true">Sign In</Link>
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