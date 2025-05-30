"use client";
import aboutTwo from "@/data/aboutTwo";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";

const { image1, image2, videoId, tagline, title, lists, rightTexts } = aboutTwo;

const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="about-two">
        <div className="about-two-shape float-bob-y">
          <Image src={image1.src} alt="" />
        </div>
        <Container >
          <Row className="w-full flex justify-between px-0">
            <Col xl={6}>
              <div className="about-two__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
                <div className="about-two__tour-points">
                  <ul className="list-unstyled about-two__list">
                    {lists.map((list, index) => (
                      <li key={index}>
                        <div className="icon">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="text">
                          <p>{list}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={5}>
              {rightTexts.map((text, index) => (
                <p
                  key={index}
                  className={`about-two__right-text-${index + 1}`}
                >
                  {text}
                </p>
              ))}
              <Link href="/tours/list" className="thm-btn about-two__btn">
                Reserve já
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default AboutTwo;
