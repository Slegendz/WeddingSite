import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import MangalLogo from "../../assets/Icons/logo-min.png";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import icons from "../../assets/Icons/headerIcon";

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
    <Navbar collapseOnSelect style={{ padding: 0 }} expand="lg">
      <Container className="navbar-container" style={{ padding: 0 }}>
        <Navbar.Brand>
          <Link to="/">
            <img src={MangalLogo} alt="Logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <RxHamburgerMenu />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {navigation.map((obj, idx) => (
              <Nav.Link
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

          <Nav>
            {icons.map((icon, idx) => (
              <a
                key={idx}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-links-icon"
              >
                <img src={icon.img} alt={icon.title} />
              </a>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
