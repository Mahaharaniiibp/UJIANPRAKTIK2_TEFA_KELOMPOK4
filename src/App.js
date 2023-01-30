import Navbar from "./components/Navbar";
import Index from "./components/index";
import Product from "./components/Product";
//import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
//import Product from "./components/Product";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/product" element={<Product />} />
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
