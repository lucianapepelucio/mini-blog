import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
//pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
