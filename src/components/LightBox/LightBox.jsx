import React, { useEffect, useRef, useContext } from "react";
import "./LightBox.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoMdDownload } from "react-icons/io";
import { useSwipeable } from "react-swipeable";
import { saveAs } from "file-saver";
import DataContext from "../../context/DataContext";
import "animate.css";
import ArrowKeysReact from "arrow-keys-react";

const LightBox = ({ images }) => {
  const { index, setIndex } = useContext(DataContext);
  const { showLightbox, setShowLightbox } = useContext(DataContext);

  const imgRef = useRef();
  const lbTags = ["path", "svg", "BUTTON", "polyline", "IMG", "P"];
  const lastIndex = images.length - 1;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 120) setShowLightbox(false);
    };

    const closeMenu = (e) => {
      if (imgRef.current && !lbTags.includes(e.target.tagName)) {
        setShowLightbox(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", closeMenu);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  useEffect(() => {
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setShowLightbox(false);
      } else if (e.key === "ArrowRight") {
        setIndex(index + 1);
      } else if (e.key === "ArrowLeft") {
        setIndex(index - 1);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [index]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex(index + 1),
    onSwipedRight: () => setIndex(index - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const downloadImage = (img, title) => {
    saveAs(img, title + ".jpg"); // Put your image URL here.
  };

  let imgNum = index + 1;
  let title = "Mangal-tithi-portfolio-" + imgNum;

  // ArrowKeysReact.config({
  //   left: () => setIndex(index - 1),
  //   right: () => setIndex(index + 1),
  //   up: () => setIndex(index + 1),
  //   down: () => setIndex(index - 1),
  // });

  return (
    <>
      <div
        // {...ArrowKeysReact.events}
        className={`gallery-lb animate__animated animate__fadeIn ${
          showLightbox ? "" : " gallery-hide"
        } `}
      >
        <div {...handlers} className="gallery-lb-wrapper">
          {images.map((image, idx) => {
            const { id, img } = image;

            let position = "nextSlide";
            if (idx === index) position = "activeSlide";
            if (
              idx === index - 1 ||
              (index === 0 && idx === images.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <div
                key={id}
                className={`gallery-lb-wrapper-section ${position} `}
              >
                <div className="gallery-lb-wrapper-section-icons">
                  <p className="animate__animated animate__fadeIn">
                    {index + 1} / {images.length}
                  </p>

                  <div className="lb-wrapper-section-icons-buttons animate__animated animate__fadeIn">
                    <button
                      className="share-icon"
                      onClick={() => downloadImage(img, title)}
                    >
                      <IoMdDownload />
                    </button>
                    <button
                      className="close-icon"
                      onClick={() => setShowLightbox(false)}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </div>

                <div className="gallery-lb-wrapper-section-fig">
                  <div className="gallery-fig-img">
                    <img ref={imgRef} src={img} alt={title} />
                  </div>
                  <div className="gallery-fig-title">
                    <p> {title} </p>
                  </div>
                </div>
              </div>
            );
          })}

          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>

          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default LightBox;
