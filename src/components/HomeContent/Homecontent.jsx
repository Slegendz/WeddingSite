import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Homecontent.css";
import images from "../../assets/Img/index";
import HomeGallery from "../HomeGallery/HomeGallery";
import LightBox from "../LightBox/LightBox";
import HomeFilms from "../HomeFilms/HomeFilms";
import HomeStory from "../HomeStory/HomeStory";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Homecontent = () => {

  const stories = [
    {
      id: 1,
      title: "Ravina X ravin",
      img: images[0].img,
    },
    {
      id: 2,
      title: "savina X savin",
      img: images[1].img,
    },
    {
      id: 3,
      title: "zavsina X zavin",
      img: images[2].img,
    },
    {
      id: 4,
      title: "mavina X mravin",
      img: images[3].img,
    },
    {
      id: 5,
      title: "Ravina X ravin",
      img: images[4].img,
    },
    {
      id: 6,
      title: "Ravinfda X radn",
      img: images[5].img,
    },
    {
      id: 7,
      title: "Rea X ravmv",
      img: images[6].img,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const videoUrl = ["mb3axOiJlSM", "G1655oteWTk", "N0suplyQuVE", "7FbROJKlTYM"];

  return (
    <div className="home-content">
      <Container>
        <Row className="home-content-desc">
          <Col sm={10} lg={8} className="home-content-container-desc ">
            <h2> Wedding Photography & Cinematography </h2>
            <p>
              We are a Wedding Photography Studio
              located in Dehradun, India. We're known for our fun,
              unconventional, and contemporary style in capturing the special
              moments of your big day. We began by photographing Indian weddings
              and have since crafted countless unique love stories globally. Our
              team is passionate, dedicated, and eager to be a part of your
              Indian wedding celebration!
            </p>
          </Col>
        </Row>

        <Row className="home-content-gallery">
          {images.map((image, idx) => (
            <HomeGallery key={image.id} {...image} idx={idx} />
          ))}
        </Row>

        <LightBox images={images} />

        <Row className="home-content-desc">
          <Col
            size={12}
            sm={10}
            lg={8}
            className="home-content-container-desc "
          >
            <h2> Indian Wedding Films </h2>
            <p>
              Just like how wedding photography has evolved over time, Indian
              Wedding Movies have also changed. They used to just record what
              happened, but now they're more like storytelling documentaries.
              Our movies capture all the important moments of your wedding day,
              but we do it in a fun and unique way. We use the latest technology
              to make sure your film matches your style and goes well with your
              photos. Each film is made to tell your own story, just like these
              examples show.
            </p>
          </Col>
        </Row>
      </Container>

        <Container className = "home-films-container">
          <Row className="home-content-films">
            {videoUrl.map((url, idx) => (
              <HomeFilms url={url} key={idx} />
            ))}
          </Row>
        </Container>

      <Container>
        <Row className="home-content-desc">
          <Col
            size={12}
            sm={10}
            lg={8}
            className="home-content-container-desc "
          >
            <h2> Real Wedding Stories </h2>
          </Col>
        </Row>

        <Row className="home-content-stories">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="home-content-carousel"
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {stories.map((story, idx) => (
              <HomeStory {...story} key={idx} />
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default Homecontent;
