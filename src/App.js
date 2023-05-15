import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import { ProductListing } from "./Pages/ProductListing/ProductListing";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
