import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("auth")) || false
  );

  const setAuth = (value) => {
    setIsAuthenticated(value);
    //alert(value);
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login setAuth={setAuth} />} />

        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/admin/addproduct"
          element={
            isAuthenticated ? (
              <AddProductForm />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/cart"
          element={
            isAuthenticated ? <Cart /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/checkout"
          element={
            isAuthenticated ? <Checkout /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="*"
          element={<h1 style={{ color: "red" }}>404 Not Found</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
