import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../../assets/Portfolio/img2.jpg";
import "./Contact.css";
import { ContactMap, ContactForm } from "../../components";

const Contact = () => {
  return (
    <div className="contact">
      <Container className="contact-container1" fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className="contact-banner">
            <img
              className="animate__animated animate__fadeIn"
              src={ContactImg}
              alt="Contact Img"
            />
            <div className="contact-banner-content animate__animated animate__fadeIn">
              <h1> Contact Us </h1>
              <h4> Capture Your Love Story </h4>
              <p> Get in Touch with Us </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-0 contact-content-wrapper">
          <Col className="contact-content" size={12} sm={10} lg={8}>
            <h3> Contact Us </h3>
            <p>
              Ready to turn your special moments into timeless treasures? At
              Mangal Tithi Studio, we specialize in capturing the essence and
              beauty of Indian weddings through our exceptional photography and
              cinematography services. Whether you're planning a grand
              celebration or an intimate gathering, our team is dedicated to
              preserving every precious moment with unparalleled skill and
              creativity. Contact us today to discuss your vision and let us
              help you create memories that last a lifetime. Trust Mangal Tithi
              Studio, your premier choice for top-notch photography and
              cinematography in Dehradun, Uttarakhand.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="contact-wrapper">
          <Col lg={6} className="contact-wrapper-map">
            <ContactMap />
          </Col>
          <Col lg={6} className="contact-wrapper-form">
            <h3> Form </h3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
