import React, { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import "./HomeGallery.css"
import DataContext from "../../context/DataContext";

const HomeGallery = ({ img, title, idx }) => {
  const { index, setIndex, showLightbox, setShowLightbox } = useContext(DataContext);

  const showImage = (idx) => {
    setShowLightbox(true);
    setIndex(idx);
  };

  return (  
    <Col md={6} xl={3}  style = {{ padding: "0.2rem", margin: 0, gap : 0}}>
      <div className="home-gallery-images">
        <img src={img} alt = {title} loading = "lazy" onClick={() => showImage(idx)}/>
      </div>
    </Col>
  );
};

export default HomeGallery;
