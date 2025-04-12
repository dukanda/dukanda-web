"use client";
import threeIconBox from "@/data/threeIconBox";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ThreeIconBox = () => {
  return (
    <section className="three-icon-box">
      <Container>
        <Row>
          {threeIconBox.map(({ id, icon, title, text }) => (
            <Col key={id} xl={4} lg={4} className="animated fadeInUp">
              <div className="three-icon-box__single">
                {/* className="text-[#F7931E] text-[30px] md:text-[50px] " */}
                <div className="text-[#F7931E] text-[30px] md:text-[50px]">
                  <span className={icon}></span>
                </div>
                <div className="three-icon-box__content">
                  <h4 className="three-icon-box__title">{title}</h4>
                  <p className="three-icon-box__text">{text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ThreeIconBox;
