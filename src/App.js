import "./App.css";
import './utils.css'
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { Navbar } from "./Components/Navbar/Navbar";
import { Cart } from "./Pages/Cart/Cart";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import Mockman from "mockman-js";
import { AuthState } from "./Contexts/AuthContext/AuthContext";
import { Login } from "./Pages/Login/Login";
import { RequiresAuth } from "./Auth/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />

        <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <h1>MOCKMAN</h1> */}
      {/* <Mockman /> */}
    </div>
  );
}

export default App;
