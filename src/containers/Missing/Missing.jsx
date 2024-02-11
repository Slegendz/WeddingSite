import React from "react";
import { BiSolidError } from "react-icons/bi";
import "./Missing.css";
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";

const Missing = () => {
  return (
    <div className="missing">
      <Container>
        <Row>
          <div className="missing-wrapper">
            <h2> 404</h2>
            <div className="missing-content">
              <div className="missing-icon">
                <BiSolidError />
              </div>
              <div className="missing-message">
                <h3> Oops! page not found</h3>
                <p>
                  {" "}
                  It seems we can’t find what you’re looking for. Perhaps
                  searching can help.{" "}
                </p>               
                <Link to = "/"> 
                  <button> Go to Home </button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Missing;
