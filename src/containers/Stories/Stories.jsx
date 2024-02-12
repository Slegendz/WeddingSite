import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Stories.css";
import StoryImage from "../../assets/Portfolio/img1.jpg";
import "animate.css";
import StoriesData from "../../assets/stories/storyAsset";
import HomeStory from "../../components/HomeStory/HomeStory";

const Stories = () => {
  return (
    <div className="stories">
      <Container className="stories-container1" fluid style={{ padding: 0 }}>
        <Row className="g-0">
          <Col size={12} className="stories-banner">
            <img
              className="animate__animated animate__fadeIn"
              src={StoryImage}
              alt="StoryImage"
            />
            <div className="stories-banner-content animate__animated animate__fadeIn">
              <h1> Stories </h1>
              <h4> Unveiling Love's Journey: Stories Through our Lens </h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-0 stories-content-wrapper">
          <Col className="stories-content" size={12} sm={10} lg={8}>
            <h3> Stories </h3>
            <p>
              Step into the heartwarming world of Mangal Tithi Studio's Stories
              Section, where every tale is a testament to love, laughter, and
              cherished moments. Our curated collection of stories captures the
              essence of joy, showcasing the beautiful journeys of couples and
              families we've had the honor to document. From intimate elopements
              to extravagant celebrations, each story is a unique masterpiece,
              told through our lens with passion and creativity. Dive into our
              gallery and immerse yourself in the magic of love as we invite you
              to be inspired by the beautiful moments we've had the privilege to
              capture.
            </p>
          </Col>
        </Row>

        <Row style = {{ marginBottom: "5rem"}}>
          {StoriesData.map((story, idx) => (
            <Col md={4} >
              <HomeStory {...story} key={idx} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Stories;
