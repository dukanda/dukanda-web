"use client";
import aboutPage from "@/data/aboutPage";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer"; // Import the intersection observer

const { image, tagline, title, text1, text2, progress } = aboutPage;

const AboutPage = () => {
  const [countStart, setCountStart] = useState(false);

  // Handling visibility changes using Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers only once when in view
    onChange: (inView) => {
      if (inView) {
        setCountStart(true); // Start counting when the element is in view
      }
    },
  });

  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="about-page__text-1">{text1}</p>
              <p className="about-page__text-2">{text2}</p>
              <div className="about-page__progress">
                {progress.map(({ id, title, count }) => (
                  <div className="about-page__progress-single" key={id}>
                    <h4 className="about-page__progress-title">{title}</h4>
                    <div
                      ref={ref} // Add the ref for Intersection Observer
                      className={id === 2 ? "bar marb-0" : "bar"}
                    >
                      <div
                        style={{ width: `${countStart ? count : 0}%` }}
                        className="bar-inner count-bar"
                      >
                        <div style={{ opacity: 1 }} className="count-text">
                          {countStart ? count : 0}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
