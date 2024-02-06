import { Navbar, Footer, Home, Stories, Portfolio, Cinematography, Contact, About, Missing } from "./components"
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Whatsapp = () => (
  <div className = "whatsapp">
    <div className="icon">
      <img src={whatsapp} alt="whatsapp" />
    </div>
    <div className="content">
      Contact us!
    </div>
  </div>
);

function App() {

  return (
    <div className = "App">
      <Navbar />

      {/* <Whatsapp /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stories" element={<Stories />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cinematography" element={<Cinematography />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
