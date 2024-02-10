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
import BannerImg from "../../assets/back-img/img7.png";

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
      loading = "lazy"
      src={image.img}
      onClick = {() => showPortfolio(idx)}
    />

    // <LazyLoad key={idx} height={200} offset={100} once>
    //   <img src={image.img} onClick={() => showPortfolio(idx)} />
    // </LazyLoad>
  ));

  // const PortfolioImages = portfolioImages.map((image, idx) => (
  //   <LazyLoadImage
  //     key={idx}
  //     alt="Wedding Photography Pics"
  //     height={image.height}
  //     scrollPosition={scrollPosition}
  //     effect="blur"
  //     src={image.img}
  //     width={image.width}
  //     onClick={() => showPortfolio(idx)}
  //     visibleByDefault={image.img === image.img}
  //   />
  // ));

  return (
    <div className="portfolio">
      {/* <Container fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className = "portfolio-banner">
            <img src={BannerImg} alt="bannerImg" />
            <div className="portfolio-banner-content">
              <h1> Portfolio </h1>
              <h4> Best Moments of our wedding couples </h4>
            </div>
          </Col>
        </Row>
      </Container> */}
      
      <Container className="portfolio-container" style={{ padding: "2rem 8%" }}>
        <h2> Portfolio </h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 3, 1600: 4 }}
        >
          {/* <PortfolioImages scrollPosition={scrollPosition} /> */}
          {/* {PortfolioImages} */}
          <Masonry className="portfolio-images-wrapper">{items}</Masonry>
        </ResponsiveMasonry>

        <LightBox images={portfolioImages} />
      </Container>
    </div>
  );
};

export default Portfolio;
