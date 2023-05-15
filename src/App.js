import "./App.css";
import { Navbar } from './Components/Navbar/Navbar'
import { Header } from './Components/Header/Header'
import { Features } from "./Components/Features/Features";
import { Categories } from "./Components/Categories/Categories";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;