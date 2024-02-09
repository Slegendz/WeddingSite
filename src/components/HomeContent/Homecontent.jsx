import React, { useState } from "react";
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
  const [showLightbox, setShowLightbox] = useState(false);
  const [index, setIndex] = useState(0);

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
      title: "zavina X zavin",
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
              Welcome to Mangal Tithi! We are a Wedding Photography Studio based
              in Dehradun, India and are known for a fun, off-beat and modern
              approach to creating stories from the best day in your life. We
              started photographing Indian weddings, and since then have created
              hundreds of unique love stories across the world. We are
              passionate, hard-working and an incredibly motivated team; we love
              Indian weddings, and can’t wait to be a part of yours!
            </p>
          </Col>
        </Row>

        <Row className="home-content-gallery">
          {images.map((image, idx) => (
            <HomeGallery
              key={image.id}
              {...image}
              setShowLightbox={setShowLightbox}
              setIndex={setIndex}
              idx={idx}
            />
          ))}
        </Row>

        <LightBox
          index={index}
          setIndex={setIndex}
          showLightbox={showLightbox}
          setShowLightbox={setShowLightbox}
        />

        <Row className="home-content-desc">
          <Col
            size={12}
            sm={10}
            lg={8}
            className="home-content-container-desc "
          >
            <h2> Indian Wedding Films </h2>
            <p>
              Just like wedding photography, Indian Wedding Movies have
              transformed from simple coverage into thematic documentary style
              wedding films. Our wedding movies are simple stories that tell the
              tale of your wedding, filmed in our inimitable fun and off-beat
              style. Using the very latest and best technology available, our
              wedding films are tailor made for your big day and perfectly
              complement your wedding photos. Every wedding film is tailor made
              to your story, a few examples of which are below.
            </p>
          </Col>
        </Row>

        <Row className="home-content-films">
          {videoUrl.map((url, idx) => (
            <HomeFilms url={url} key={idx} />
          ))}
        </Row>

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
