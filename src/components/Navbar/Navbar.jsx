import React from "react";
// import logo from "../../assets/Img/logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";
import facebook from "../../assets/Icons/facebook.svg";
import whatsapp from "../../assets/Icons/whatsapp.svg";
import youtube from "../../assets/Icons/youtube.svg";
import instagram from "../../assets/Icons/instagram.svg";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";

const navbar = () => {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "Stories", link: "/stories" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Cinematography", link: "/cinematography" },
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact-us" },
  ];

  return (
    <Navbar
      collapseOnSelect
      style={{ padding: 0 }}
      expand="lg"
      className="site-navbar"
    >
      <Container className="site-navbar-container">
        <Navbar.Brand href="#" className="site-navbar-logo">
          <img src={facebook} alt="facebook" />
        </Navbar.Brand>

        <Navbar.Toggle
          className="site-navbar-toggle"
          aria-controls="responsive-navbar-nav"
        >
          <RxHamburgerMenu />
        </Navbar.Toggle>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="site-navbar-section"
        >
          <Nav className="me-auto site-navbar-section-links">
            {navigation.map((obj, idx) => (
              <Nav.Link
                style={{ padding: "1.3rem 1rem" }}
                as={NavLink}
                to={obj.link}
                key={idx}
                eventKey={idx + 1}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {obj.name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="site-navbar-section-icons"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
