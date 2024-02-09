import React from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import Vid from "../../assets/Vid/vid.mp4";
import HomeContent from "../HomeContent/Homecontent"
import homeBg from "./home-bg.png";
import shwetaVid from "./shweta.mp4"

const Home = () => {
  return (
    <div className="home">
      <Container fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className = "home-banner">
            <video className="home-banner-vid" muted autoPlay>      { /* autoPlay muted */}
              <source src={shwetaVid} type="video/mp4" />
            </video>
            {/* <div className="home-banner-bg">
              <img src= {homeBg} alt="home-bg" />
            </div> */}
            <div className="home-banner-content">
              <h3>Welcome to</h3>
              <h1>Mangal Tithi</h1>
              <button> Portfolio </button>
            </div>
          </Col>

        </Row>
      </Container>

      <HomeContent />
    </div>
  );
};

export default Home;
