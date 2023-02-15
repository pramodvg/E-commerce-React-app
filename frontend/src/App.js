import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
