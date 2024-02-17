import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./context/DataContext";
import whatsapp from "./assets/Icons/whatsapp.svg";
import { useLocation } from "react-router";

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
const StoryPage = lazy(() => import("./components/StoryPage/StoryPage"));

const Whatsapp = () => (
  <div className="App-whatsapp">
    <div className="App-icon">
      <img src={whatsapp} alt="whatsapp" />
    </div>
    <div className="App-content"> Whatsapp Us!</div>
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

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<FallbackLoader />}>
          <DataProvider>
            <ScrollToTop>
              <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/home" element={<Home />} />
                <Route exact path="/stories" element={<Stories />} />
                <Route exact path="/stories/:id" element={<StoryPage />} />
                <Route exact path="/portfolio" element={<Portfolio />} />

                <Route
                  exact
                  path="/cinematography"
                  element={<Cinematography />}
                />
                <Route exact path="/contact-us" element={<Contact />} />
                <Route exact path="/about-us" element={<About />} />
                <Route exact path="*" element={<Missing />} />
              </Routes>
            </ScrollToTop>
          </DataProvider>

          <a href="#">
            <Whatsapp />
          </a>

          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
