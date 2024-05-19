import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StoriesData from "../../assets/stories/storyAsset.js";
import { useParams, Link } from "react-router-dom";
import "./StoryPage.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const StoryPage = () => {
  const { id } = useParams();
  const len = StoriesData.length;
  let currId = parseInt(id);
  const storyData = StoriesData.find((story) => story.id.toString() === id);

  return (
    <Container className="story-page">
      <Row className="story-content-desc">
        <Col sm={10} lg={8} className="story-content-container-desc">
          <h2> {storyData.title} </h2>
          <img src={storyData.headerImg} alt="Header Img" />
          <p>{storyData.desc}</p>
        </Col>
      </Row>

      <Row className="story-content-gallery">
        {storyData.imgUrl.map((image, idx) => (
          <Col key={idx} sm={10} lg={8} className="story-page-images">
            <img loading = "lazy" src={image.img} alt="couple image" />
          </Col>
        ))}
      </Row>

      <Row className = "story-gallery-buttons-wrapper" >
        <Col sm = {10} lg = {8} className="story-gallery-buttons">
          <Link to={`/stories/${currId - 1 ? currId - 1 : len}`}>
            <button> Prev Story </button>
          </Link>
          <Link to={`/stories/${currId + 1 <= len ? currId + 1 : 1}`}>
            <button> Next Story  </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default StoryPage;
