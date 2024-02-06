import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Homecontent.css"
import HomeGallery from "../HomeGallery/HomeGallery";
import images from "../../assets/Img/index"

const Homecontent = () => {
  return (
    <div className="home-content">
      <Container >
        <Row className = "home-content-wrapper1">
          <Col sm={10} lg = {8} className = "home-content-container-desc ">
                <h2> Wedding Photographers & Cinematographers </h2>
                <p>
                  Welcome to Twogether Studios! We are a boutique Candid Wedding
                  Photography Studio based in New Delhi, India and are known for
                  a fun, off-beat and modern approach to creating stories from
                  the best day in your life. Led by Arjun & Praerna Kartha, we
                  started photographing Indian weddings in 2008, and since then
                  have created hundreds of unique love stories across the world.
                  We are passionate, hard-working and an incredibly motivated
                  team; we love Indian weddings, and can’t wait to be a part of
                  yours!
                </p>
          </Col>
        </Row>

        <Row className = "home-content-wrapper2">
            {images.map((image, idx) => (
            <HomeGallery {...image} key = {idx} />)
            )}
        </Row>
      </Container>
    </div>
  );
};

export default Homecontent;
