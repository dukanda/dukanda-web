import React from "react";
import { Container } from "react-bootstrap";

const SingleSlide = ({ coverImageUrl }: { coverImageUrl: string }) => {

  return (
    <div className="swiper-slide">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${coverImageUrl})`,
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
