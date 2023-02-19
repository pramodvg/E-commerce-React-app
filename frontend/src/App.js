import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthRoute from './components/login/AuthRoute';
import Login from "./components/login/Login.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/Home";
import AddProductForm from "./components/Admin/AddProductForm";
import Cart from "./components/Cart/Cart";
import "semantic-ui-css/semantic.min.css";
import { Checkbox } from "semantic-ui-react";
import Checkout from "./components/checkout/Checkout";
function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
