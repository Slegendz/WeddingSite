import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import AboutImage from "../../assets/Portfolio/img27.jpg";
import "animate.css";
import AboutInfoImg from "../../assets/Portfolio/img9.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <Container className="about-container1" fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className="about-banner">
            <img
              className="animate__animated animate__fadeIn"
              src={AboutImage}
              alt="AboutImage"
            />
            <div className="about-banner-content animate__animated animate__fadeIn">
              <h1> About Us </h1>
              <h4> Best photography & cinematography studio </h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-0 about-content-wrapper">
          <Col className="about-content" size={12} sm={10} lg={8}>
            <h3> About Us </h3>
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

      <Container className="about-info-container">
        <Row className="g-0 about-info-section">
          <Col md={7} className="about-info-section-img">
            <img src={AboutInfoImg} alt="Couple Image" />
          </Col>
          <Col md={5} className="about-info-section-content">
            <h3> Creating Memories </h3>
            <div className="about-info-section-content-desc">
              <p>
                We started in Dehradun, Uttarakhand, with a big dream to capture
                love and happiness through photos and videos. We wanted to make
                sure every couple's special day was remembered forever.
              </p>
              <p>
                Now, we're a team of passionate photographers and
                cinematographers. We work hard to capture all the smiles, tears,
                and love on your wedding day. Whether it's a big celebration or
                a cozy gathering, we're here to make sure every moment is
                captured beautifully.
              </p>

              <p>
                We believe in the power of love and storytelling. Our goal is to
                spread joy and create memories that will last a lifetime. Thank
                you for considering us to be a part of your special day. We
                can't wait to capture your love story!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="about-box">
        <Container>
          <Row className="about-box-wrapper">
            <Col md={5} className="about-box-wrapper-contacts">
              <h3> Get in Touch with us </h3>
            </Col>

            <Col md={7} className="about-box-wrapper-content">
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

export default About;
