import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PortfolioImages = ({ images }) => (
  <>
    {images.map((image, idx, scrollPosition) => (
      <LazyLoadImage
        key={idx}
        alt="Wedding Photography Pics"
        height={image.height}
        scrollPosition={scrollPosition}
        effect="blur"
        src={image.img}
        width={image.width}
        onClick={() => showPortfolio(idx)}
        // visibleByDefault={image.src === 'img'} />
      />
    ))};
  </>
);

export default trackWindowScroll(PortfolioImages);
