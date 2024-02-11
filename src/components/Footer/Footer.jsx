import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import MangalLogo from "../../assets/Icons/logo-min.png";
import { GoMail } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { PiLinkSimple } from "react-icons/pi";
import icons from "../../assets/Icons/footerIcon";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col size={12} md={3}>
            <div className="footer-nav-mid footer-nav">
              <Link to = "/" > <img src={MangalLogo} height="70" alt="Mangal-Logo" /> </Link>
              <p> Mangal Tithi </p>
            </div>
          </Col>
          <Col size={12} md={3}>
            <div className="footer-nav2 footer-nav">
              <h4> Links </h4>

              <div className="footer-nav-links">
                <Link to="/portfolio"> <PiLinkSimple/> Portfolio </Link>
                <Link to="/stories"><PiLinkSimple/>  Story </Link>
                <Link to="/cinematography"> <PiLinkSimple/> Cinematography </Link>
                <Link to="/about-us"> <PiLinkSimple/> About </Link>
                <Link to="/contact-us"> <PiLinkSimple/> Contact </Link>
              </div>
            </div>
          </Col>
          <Col size={12} md={3}>
            <div className="footer-nav3 footer-nav">
              <h4> Follow us </h4>
              <div className="footer-nav3-socials">
                {icons.map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-links-icon"
                  >
                    <img
                      width="36px"
                      height="36px"
                      src={icon.img}
                      alt={icon.title}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col size={12} md={3}>
            <div className="footer-nav4 footer-nav">
              <h4> Contact </h4>

              <div className="footer-nav-contact">
                <a href="mailto:negisachin750@gmail.com" target="_blank">
                  <GoMail /> negisachin750@gmail.com
                </a>
                <a href="tel:9015430615"> <CiPhone/> 9015430615 </a>
                <a href="#"> <IoHomeOutline/> Haripur, nawada, dehradun uttrakhand idia</a>
                <a href="#"> <IoHomeOutline/> Haripur, nawada, dehradun uttrakhand idia</a>
              </div>
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
