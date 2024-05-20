import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import HomeContent from "../../components/HomeContent/Homecontent";
import shwetaVid from "./shweta-comp.mp4";
import { Link } from "react-router-dom";
import "animate.css";
import HeroImg from "../../assets/Portfolio/img19.jpg";

const Home = () => {
  return (
    <div className="home">
      <Container fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className="home-banner">
            <video className="home-banner-vid" loading = "lazy" muted autoPlay preload = "meta">
              <source src={shwetaVid} type="video/mp4" />
            </video>
            <div className="home-banner-content animate__animated animate__fadeIn">
              <h1>Mangal Tithi</h1>
              <h4>Candid Photography & Cinematography</h4>
              <button>
                <Link to="/portfolio"> Portfolio </Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="home-hero-container">
        <Row className="g-0 home-hero-section">
          <Col md={7} className="home-hero-section-img">
            <img loading = "eager" src={HeroImg} alt="Couple Image" />
          </Col>
          <Col md={5} className="home-hero-section-content">
            <h3> Mangal Tithi </h3>
            <div className="home-hero-section-content-desc">
              <p>
                Welcome to Mangal Tithi Studios, your premier destination for
                exquisite Indian wedding photography and cinematography.
              </p>
              <p>
                At Mangal Tithi, we believe in more than just clicking pictures,
                we craft timeless memories that you'll cherish for a lifetime.
              </p>

              <p>
                With a team of skilled photographers and cinematographers, we
                specialize in capturing the essence of Indian weddings with
                finesse and flair.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <HomeContent />

      <div className="home-box">
        <Container>
          <Row className="home-box-wrapper">
            <Col md={5} className="home-box-wrapper-contacts">
              <h3> Get in Touch with us </h3>
            </Col>

            <Col md={7} className="home-box-wrapper-content">
              <p>
                Whether you're planning a destination wedding or seeking a
                photographer for your Dehradun wedding, reach out to us to begin
                creating something truly magical!
              </p>
              <Link to="/contact-us">
                <button> Contact Us </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
