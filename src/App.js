import Index from "./components/index";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchNProduct from "./components/SearchNProduct";
//import Product from "./components/Product";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<SearchNProduct />} /> 
        
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
  );
}

export default App;
