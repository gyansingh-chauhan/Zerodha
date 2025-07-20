import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
   
      <nav id="this_is_nav" className="navbar navbar-expand-lg  border-bottom " style={{backgroundColor:"white"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/home">
            <img src="media/image/logo.svg" style={{width:"25%"}} alt="Logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{textDecoration:"none",color:"black"}} className="nav-Link active m-4 " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration:"none",color:"black"}} className="nav-Link active m-4" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration:"none",color:"black"}} className="nav-Link active m-4" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item ">
                <Link style={{textDecoration:"none",color:"black"}} className="nav-Link active m-4" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration:"none",color:"black"}} className="nav-Link active m-4" to="/support">
                  Support
                </Link>
              </li>
            
            </ul>
            </form>
           
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
