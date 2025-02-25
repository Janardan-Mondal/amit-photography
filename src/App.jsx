import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Galary from "./pages/Galary";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return <div className="w-4/5 m-auto">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/galary" element={<Galary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
