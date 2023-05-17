import "./App.css";
import './utils.css'
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { Navbar } from "./Components/Navbar/Navbar";
import { Cart } from "./Pages/Cart/Cart";
import { Wishlist } from "./Pages/Wishlist/Wishlist";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

    </div>
  );
}

export default App;
