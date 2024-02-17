import React, { useContext, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import portfolioImages from "../../assets/Portfolio/index";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";
import LightBox from "../../components/LightBox/LightBox";
import DataContext from "../../context/DataContext";
// import {
//   LazyLoadImage,
//   trackWindowScroll,
// } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import LazyLoad from "react-lazyload";
import BannerImg from "./../../assets/port.jpg";
import "animate.css";

const Portfolio = () => {
  const { index, setIndex, showLightbox, setShowLightbox } =
    useContext(DataContext);

  const showPortfolio = (idx) => {
    setShowLightbox(true);
    setIndex(idx);
  };

  const items = portfolioImages.map((image, idx) => (
    <img
      key={idx}
      src={image.img}
      onClick={() => showPortfolio(idx)}
    />
  ));
  
  return (
    <div className="portfolio">
      <Container className="portfolio-container1" fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className="portfolio-banner">
            <img
              className="animate__animated animate__fadeIn"
              src={BannerImg}
              alt="bannerImg"
            />
            <div className="portfolio-banner-content animate__animated animate__fadeIn">
              <h1> Portfolio </h1>
              <h4> Best Moments of our wedding couples </h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-0 portfolio-content-wrapper">
          <Col className="portfolio-content" size={12} sm={10} lg={8}>
            <h3> Portfolio </h3>
            <p>
              Weddings provide a perfect platform for experiencing a gamut of
              emotions, unseen in any other event anywhere. Good wedding
              photography captures the essence of these timeless emotions in
              their most untouched form. Explore the showcase of some of the
              many weddings we have been so fortunate to be a part of and get a
              first-hand experience of our style and creativity.
            </p>
          </Col>
        </Row>
      </Container>
      
      <Container
        className="portfolio-container2"
        style={{ padding: "2rem 8%" }}
      >
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 3, 1600: 4 }}
        >
          <Masonry className="portfolio-images-wrapper">{items}</Masonry>
        </ResponsiveMasonry>

        <LightBox images={portfolioImages} />
      </Container>
    </div>
  );
};

export default Portfolio;
