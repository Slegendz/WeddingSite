import React from "react";
import "./HomeStory.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const HomeStory = ({ id, title, img }) => {
  return (
    <div className="home-content-story">
      <div className="home-content-story-image">
        <img src={img} alt={title} />
        <Link to={`/stories/${id}`}>
          <div className="home-story-overlay"></div>
        </Link>
        <div className="home-content-story-title">
          <h5> {title} </h5>
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
