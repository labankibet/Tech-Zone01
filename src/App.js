import React from "react";
import {  Route, Routes} from "react-router-dom"; // Import Routes
import "./App.css";
import Homepage from "./components/Homepage";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/Navbar";
import UserRegistration from "./components/RegistrationPage";
import Login from "./components/LoginPage";
import Cart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/registration" element = {<UserRegistration />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/checkout" element = {<Checkout />}/>

        
      </Routes>
    </>
  );
}

export default App;
