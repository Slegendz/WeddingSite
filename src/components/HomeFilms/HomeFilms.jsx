import React from "react";
// import ReactPlayer from "react-player";
import { Col } from "react-bootstrap";
// import YouTube from "react-youtube";
import "./HomeFilms.css";
import { useState } from "react";

const HomeFilms = ({ url, key }) => {
  const [play, setPlay] = useState(false);

  const handlePlay = (e) => {
    setPlay(true);
  };

  return (
    <Col sm={12} md={6} style={{ padding: "0.5rem", margin: 0, gap: 0 }}>
      <div className="home-films-wrapper" data-youtube>
        {!play && (
          <>
            <img
              loading={key <= 2 ? "eager" : "lazy"}
              decoding={key <= 2 ? "sync" : "async"}
              src={`https://i.ytimg.com/vi/${url}/maxresdefault.jpg`}
              className="home-films-placeholder"
            />
            <button className="home-films-button" onClick={handlePlay}></button>
          </>
        )}
        {play && (
          <iframe
            className="home-films-iframe"
            src={`https://www.youtube.com/embed/${url}?showinfo=0&rel=0&origin=http://localhost:5173/`}
          ></iframe>
        )}
      </div>
    </Col>
  );
};

export default HomeFilms;
