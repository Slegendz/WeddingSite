import React from "react";
// import logo from "../../assets/Img/logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";
import facebook from "../../assets/Icons/facebook.svg";
import whatsapp from "../../assets/Icons/whatsapp.svg";
import youtube from "../../assets/Icons/youtube.svg";
import instagram from "../../assets/Icons/instagram.svg";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Menu = () => (
  <>
    <NavLink to = "/" className = {({ isActive }) => isActive? "active" : ""}> Home </NavLink>
    <NavLink to = "/stories" className = {({ isActive }) => isActive? "active" : ""}> Stories </NavLink>
    <NavLink to = "/portfolio" className = {({ isActive }) => isActive? "active" : ""}> Portfolio </NavLink>
    <NavLink to = "/cinematography" className = {({ isActive }) => isActive? "active" : ""}> Cinematography </NavLink>
    <NavLink to = "/about-us" className = {({ isActive }) => isActive? "active" : ""}> About </NavLink>
    <NavLink to = "/contact-us" className = {({ isActive }) => isActive? "active" : ""}> Contact </NavLink>
  </>
)

const navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  return (
    <Navbar style={{ padding: 0 }} expand="lg" className="site-navbar">
      <Container className = "site-navbar-container">
        <Navbar.Brand href="#" className="site-navbar-logo">
          <img src={facebook} alt="facebook" />
        </Navbar.Brand>

        <Navbar.Collapse className="site-navbar-section">
          <div className="site-navbar-section-links">
           <Menu />
          </div>

          <div className="site-navbar-section-icons"></div>
        </Navbar.Collapse>

        {/* <div className="site-navbar-toggle">
          <div className="site-navbar-toggle-menu">
            <button onClick = {() => setShowMenu(!showMenu)}> X </button>

          </div>
        </div> */}
      </Container>
    </Navbar>
  );
};

export default navbar;
