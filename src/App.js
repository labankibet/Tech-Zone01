import React from "react";
import {  Route, Routes} from "react-router-dom"; // Import Routes
import "./App.css";
import Homepage from "./components/Homepage";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/Navbar";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/registration" element = {<RegistrationPage />}/>
        <Route path="/login" element = {<LoginPage />}/>
      </Routes>
    </>
  );
}

export default App;
