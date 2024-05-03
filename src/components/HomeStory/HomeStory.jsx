import React from "react";
import "./HomeStory.css";
import { Link } from "react-router-dom";

const HomeStory = ({ id, title, headerImg }) => {
  return (
    <div className="home-content-story">
      <div className="home-content-story-image">
        <img loading = "lazy" src={headerImg} alt={title} />
        <Link to={`/stories/${id}`}>
          <div className="home-story-overlay"></div>
        </Link>
        <div className="home-content-story-title">
          <Link to={`/stories/${id}`}>
            <h5> {title} </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
