import React from "react";
import { Col } from "react-bootstrap";
import "./HomeGallery.css"

const HomeGallery = ({ img }) => {
  return (
    <Col sm={6} md={4} lg={3} xll={2} style = {{ padding: "0.2rem", margin: 0, gap : 0}}>
      <div className="home-gallery-images">
        <img src={img} alt="Image" />
      </div>
    </Col>
  );
};

export default HomeGallery;
