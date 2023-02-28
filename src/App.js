import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
function App() {
  return (
    <div className="App relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
