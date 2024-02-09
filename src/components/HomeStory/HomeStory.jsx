import React from "react";
import "./HomeStory.css";
import { Col } from "react-bootstrap";

const HomeStory = ({ id, title, img }) => {
  
  return (
    <div className="home-content-story">
      <img src={img} alt={title} />
      <h5> {title} </h5>
    </div>
  );
};

export default HomeStory;
