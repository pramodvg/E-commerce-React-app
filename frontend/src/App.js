import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login.jsx";
import AuthRoute from './components/login/AuthRoute';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import AddProductForm from "./components/Admin/AddProductForm";
import Cart from "./components/Cart/Cart";
import "semantic-ui-css/semantic.min.css";
import Checkout from "./components/checkout/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route exact path='/' element={<AuthRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/addproduct" element={<AddProductForm />} />
        </Route>

        <Route path="*" element={<h1 style={{ color: "red" }}>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
