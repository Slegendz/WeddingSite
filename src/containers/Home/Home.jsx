import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Vid from "../../assets/Vid/vid.mp4";
import HomeContent from "../../components/HomeContent/Homecontent"
import shwetaVid from "./shweta.mp4"
import { Link } from "react-router-dom";
import "animate.css";

const Home = () => {
  return (
    <div className="home">
      <Container fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className = "home-banner">
            <video className="home-banner-vid" muted autoPlay>      { /* autoPlay muted */}
              <source src={shwetaVid} type="video/mp4" />
            </video>
            <div className="home-banner-content animate__animated animate__fadeIn">
              <h1>Mangal Tithi</h1>
              <h4>Candid Photography & Cinematography</h4>
              <button> <Link to = "/portfolio"> Portfolio </Link> </button>
            </div>
          </Col>

        </Row>
      </Container>

      <HomeContent />
    </div>
  );
};

export default Home;
