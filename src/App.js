import Index from "./components/index";
import Footer from "./components/Footer";
import Member from "./components/MemberUi";
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
          <Route path="/member" element={<Member />} />
        </Routes>
      </Router>
  );
}

export default App;
