import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import images from "../../assets/Img/index";
import { Container } from "react-bootstrap"
import "./Portfolio.css"
import LightBox from "../LightBox/LightBox";

const Portfolio = ({ index, setIndex, showLightbox, setShowLightbox }) => {
  const items = images.map((image, idx) => (
    <img
      loading = "lazy"
      key={idx}
      src={image.img}
      style={{ width: "100%", borderRadius: "20px", padding: "0.4rem" }}
    />
  ));

  return (
    <div className = "portfolio">
      <Container className = "portfolio-container" style = {{ padding: "2rem"}}>
        <h2> Portfolio </h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 3 }}
        >
          <Masonry>{items}</Masonry>
        </ResponsiveMasonry>

        <LightBox
          index={index}
          setIndex={setIndex}
          showLightbox={showLightbox}
          setShowLightbox={setShowLightbox}
        />
      </Container>
    </div>
  );
};

export default Portfolio;
