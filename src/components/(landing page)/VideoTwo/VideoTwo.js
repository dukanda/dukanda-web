"use client";
import videoTwo from "@/data/videoTwo";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "@/components/(landing page)/Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";

const Jarallax = dynamic(() => import("@/components/(landing page)/Jarallax/Jarallax"), {
  ssr: false,
});

const { videoId, tagline, title } = videoTwo;

const VideoTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-two">
        <Jarallax className="video-two-bg" speed={0.2} imgPosition="50% 0%">
          <JarallaxImage src={"/dukanda_2.jpg"} />
        </Jarallax>
        <Container>
          <Row>
            <Col xl={12}>
              <div className="video-two__inner">
                <div className="video-one__video-link">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(true)}
                    className="video-popup"
                  >
                    <div className="video-one__video-icon">
                      <span className="icon-play-button"></span>
                      <i className="ripple"></i>
                    </div>
                  </a>
                </div>
                <p className="video-one__tagline">{tagline}</p>
                <h2 className="video-one__title">
                  {title.split("\n").map((t, i) => (
                    <div key={i + 1}>
                      <span >{t}</span>
                      <br />
                    </div>
                  ))}
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoTwo;
