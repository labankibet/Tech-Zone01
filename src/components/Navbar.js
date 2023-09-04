import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

 function NavBar(){
  
    return(
      <nav>
      <div id="div1">
      <h1>PHONE ZONE</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Orders List</Link>
      </div>
    </nav>
    );
 }
 export default NavBar;
