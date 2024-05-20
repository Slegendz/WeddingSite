import React from "react";
import "./StoryCards.css";
import { Link } from "react-router-dom";

const StoryCards = ({ id, title, headerImg }) => {
  return (
    <div className="story-card-content">
      <div className="story-card-content-image">
        <img
          loading={id <= 2 ? "eager" : "lazy"}
          decoding={id <= 2 ? "sync" : "async"}
          src={headerImg}
          alt={title}
        />
        <Link to={`/stories/${id}`}>
          <div className="story-card-overlay"></div>
        </Link>
        <div className="story-card-content-title">
          <Link to={`/stories/${id}`}>
            <h5> {title} </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCards;
