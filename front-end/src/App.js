import React from "react";
import Catagories from "./Components/catagories/Catagories";
import Navbar from "./Components/navBar/Navbar";
import Products from "./Components/products/Products";
import Slider from "./Components/slider/Slider";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import ProductList from "./Components/productList/ProductList";
import ProductDetail from "./Components/productDetail/ProductDetail";
import LogIn from "./Components/logIn/LogIn";
import { useSelector } from "react-redux";

function App() {
 const {currentUser} = useSelector((state) => state.user); 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:catagory" element={<ProductList />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="logIn/" element={currentUser? <Navigate to = "/" replace />:<LogIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
