import React from "react";
// import ReactPlayer from "react-player";
import { Col } from "react-bootstrap";
// import YouTube from "react-youtube";
import "./HomeFilms.css";

const HomeFilms = ({ url }) => {
  return (
    <Col sm={12} md={6} style={{ padding: "0.5rem", margin: 0, gap: 0 }}>
      <div className="home-films-wrapper">
        <iframe
          loading="lazy"
          className="home-films-wrapper-player"
          src={`https://www.youtube.com/embed/${url}?&origin=http://localhost:5173/`}
        ></iframe>
      </div>
    </Col>
  );
};

export default HomeFilms;
