import React from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import Vid from "../../assets/Vid/vid.mp4";
import HomeContent from "../HomeContent/Homecontent"

const Home = () => {
  return (
    <div className="Home">
      <Container fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12}>
            <video className="home-banner-vid" loop autoPlay >      { /* autoPlay muted */}
              <source src={Vid} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>

      <HomeContent />
    </div>
  );
};

export default Home;
