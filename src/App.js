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
import { Login } from "./Pages/Login/Login";
import { RequiresAuth } from "./Auth/RequiresAuth";
import { Profile } from "./Pages/Profile/Profile";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Checkout } from "./Pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DataState } from "./Contexts/Data/DataContext";
import { Loader } from "./Components/Loader/Loader";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";

function App() {

  const { loading } = DataState()

  return (
    <div className="App">
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />

        <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/profile" element={<RequiresAuth>
          <Profile />
        </RequiresAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/checkout" element={<RequiresAuth><Checkout /></RequiresAuth>} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      <ToastContainer position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
