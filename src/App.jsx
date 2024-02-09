// import { Navbar, Footer, Home, Stories, Portfolio, Cinematography, Contact, About, Missing } from "./components"
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./components/Home/Home"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Stories = lazy(() => import("./components/Stories/Stories"));
const Cinematography = lazy(() =>
  import("./components/Cinematography/Cinematography")
);
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Missing = lazy(() => import("./components/Missing/Missing"));

const Whatsapp = () => (
  <div className="whatsapp">
    <div className="icon">
      <img src={whatsapp} alt="whatsapp" />
    </div>
    <div className="content">Contact us!</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Whatsapp /> */}

      <Suspense fallback={<div style = {{ display: "flex", flexGrow: "1", height: "100vh"}}> Loading... </div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/stories" element={<Stories />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
