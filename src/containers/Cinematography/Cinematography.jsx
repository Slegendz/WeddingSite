import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cinematography.css";
import CineImage from "../../assets/Portfolio/img30.jpg";
import "animate.css";
import HomeFilms from "../../components/HomeFilms/HomeFilms";

const Cinematography = () => {
  const cineUrl = ["mb3axOiJlSM", "G1655oteWTk", "zrDXo0FEMMY", "7FbROJKlTYM","mb3axOiJlSM", "G1655oteWTk", "zrDXo0FEMMY", "7FbROJKlTYM"];

  return (
    <div className="cinematography">
      <Container
        className="cinematography-container1"
        fluid
        style={{ padding: 0 }}
      >
        <Row className="g-0">
          <Col size={12} className="cinematography-banner">
            <img
              className="animate__animated animate__fadeIn"
              src={CineImage}
              alt="Cinematography Image"
            />
            <div className="cinematography-banner-content animate__animated animate__fadeIn">
              <h1> Cinematography </h1>
              <h4> Capturing the Melody of Love </h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-0 cinematography-content-wrapper">
          <Col className="cinematography-content" size={12} sm={10} lg={8}>
            <h3> Cinematography </h3>
            <p>
              Step into a world where every moment is a masterpiece and every
              memory is cherished forever. At Mangal Tithi Studio, we specialize
              in creating stunning cinematic experiences that capture the
              essence of your special day. Our team of passionate
              cinematographers is dedicated to crafting captivating films that
              tell your unique love story with authenticity and style.
            </p>
            <p>
              Take a glimpse into our portfolio and discover the magic of our
              cinematic storytelling. Let Mangal Tithi Studio turn your wedding
              into an unforgettable cinematic journey that you'll love to
              revisit again and again.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className = "cinematography-films-container">
          <Row className="cinematography-content-films">
            {cineUrl.map((url, idx) => (
              <HomeFilms url={url} key={idx} />
            ))}
          </Row>
        </Container>
    </div>
  );
};

export default Cinematography;
