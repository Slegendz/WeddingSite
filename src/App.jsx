// import { Navbar, Footer, Home, Stories, Portfolio, Cinematography, Contact, About, Missing } from "./components"
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./context/DataContext";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./containers/Home/Home"));
const Portfolio = lazy(() => import("./containers/Portfolio/Portfolio"));
const Stories = lazy(() => import("./containers/Stories/Stories"));
const Cinematography = lazy(() =>
  import("./containers/Cinematography/Cinematography")
);
const About = lazy(() => import("./containers/About/About"));
const Contact = lazy(() => import("./containers/Contact/Contact"));
const Missing = lazy(() => import("./containers/Missing/Missing"));

const Whatsapp = () => (
  <div className="whatsapp">
    <div className="icon">
      <img src={whatsapp} alt="whatsapp" />
    </div>
    <div className="content">Contact us!</div>
  </div>
);

const FallbackLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f8f9fa",
    }}
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* <Whatsapp /> */}

      <Navbar />
      <Suspense fallback={<FallbackLoader />}>
        <DataProvider>
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
        </DataProvider>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
