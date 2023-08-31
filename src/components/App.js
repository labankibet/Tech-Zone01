import React from "react";
import {  Route, Routes} from "react-router-dom"; // Import Routes
import "./App.css";
import Homepage from "./Homepage";
import ProductDetails from "./ProductDetails";
import NavBar from "./Navbar";
import UserRegistration from "./Registration";
import LoginPage from "./LoginPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/registration" element = {<UserRegistration />}/>
        <Route path="/login" element = {<LoginPage />}/>
      </Routes>
    </>
  );
}

export default App;
