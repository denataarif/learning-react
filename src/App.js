import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countexample from "./Components/Countexample";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
      {/* <Countexample/> */}
      <Router>
        <Header />
        <div className="p-3">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
