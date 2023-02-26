import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthRoute from './components/login/AuthRoute';
import Login from "./components/login/Login.jsx";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import AddProductForm from "./components/Admin/AddProductForm";
import Cart from "./components/Cart/Cart";
import "semantic-ui-css/semantic.min.css";
import Checkout from "./components/checkout/Checkout";
import cartItemsContext from './components/UserContext'
function App() {
  const [cart, setCart] = useState([]);
  return (
    <cartItemsContext.Provider value={[cart, setCart]}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route exact path='/' element={<AuthRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin/addproduct" element={<AddProductForm />} />
          </Route>
          <Route path="*" element={<h1 style={{ color: "red" }}>404 Not Found</h1>} />
        </Routes>
      </Router>
    </cartItemsContext.Provider>
  );
}

export default App;
