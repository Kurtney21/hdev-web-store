import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Register from './components/Register';
import Login from "./components/Login";

function App() {
  const username = useSelector(state => state.user.username);
  
  return (
    <Router>
            <Header username={username} />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
  );
}

export default App;
