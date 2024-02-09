import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import facebook from "../../assets/Icons/facebook.svg";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row >
          <Col size={12} sm={3}>
            <div className="footer-nav1 footer-nav">
              <img src={facebook} width="42" height="42" alt="facebook" />
              <p> Mangal Tithi </p>
            </div>
          </Col>
          <Col size={12} sm={3}>
            <div className="footer-nav2 footer-nav">
            <h4> Links </h4>
              <a href="#"> about </a>
              <a href="#"> about </a>
              <a href="#"> about </a>
              <a href="#"> about </a>
              <a href="#"> about </a>
            </div>
          </Col>
          <Col size={12} sm={3}>
            <div className="footer-nav3 footer-nav">
              <h4> Follow us for more</h4>
              <div className="footer-nav3-socials">
                <img src={facebook} width="42" height="42" alt="facebook" />
                <img src={facebook} width="42" height="42" alt="facebook" />
                <img src={facebook} width="42" height="42" alt="facebook" />
                <img src={facebook} width="42" height="42" alt="facebook" />
              </div>
            </div>
          </Col>
          <Col size={12} sm={3}>
            <div className="footer-nav4 footer-nav">
            <h4> Contact </h4>
              <a href="mailto:negisachin750@gmail.com" target="_blank">
                negisachin750@gmail.com
              </a>
              <a href="tel:9015430615"> 9015430615 </a>
              <a href="#"> haripur, nawada, dehradun uttrakhand idia</a>
              <a href="#"> haripur, nawada, dehradun uttrakhand idia</a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="footer-nav-copyright">
            <p>Mangal Tithi. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
