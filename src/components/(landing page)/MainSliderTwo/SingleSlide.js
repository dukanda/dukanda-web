import React from "react";
import { Container } from "react-bootstrap";

const SingleSlide = ({ slide = {} }) => {
  const { bg } = slide;

  return (
    <div className="swiper-slide">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      <Container>
        <div className="swiper-slide-inner">
          <div className="tour-details-slider_icon">
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleSlide;
