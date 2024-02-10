import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./About.css"
import AboutImage from "../../assets/Portfolio/img27.jpg";
import "animate.css"


const About = () => {
  return (
    <div className = "about">
      <Container className="about-container1" fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className="about-banner">
            <img className = "animate__animated animate__fadeIn" src={AboutImage} alt="AboutImage" />
            <div className="about-banner-content animate__animated animate__fadeIn">
              <h1> About Us </h1>
              <h4> Best photography & cinematography studio </h4>
            </div>
          </Col>
        </Row>

        <Row className = "g-0 about-content-wrapper">
          <Col className = "about-content" size={12} sm={8}>
            <p>
              Weddings provide a perfect platform for experiencing a gamut of
              emotions, unseen in any other event anywhere. Good wedding
              photography captures the essence of these timeless emotions in
              their most untouched form. Explore the showcase of some of the
              many weddings we have been so fortunate to be a part of and get a
              first-hand experience of our style and creativity.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About