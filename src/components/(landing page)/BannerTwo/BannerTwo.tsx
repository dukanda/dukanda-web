"use client";
import React from "react";
import BackgroundSlider from "react-background-slider";
import { Col, Container, Row } from "react-bootstrap";
import setImage from "../../../utils/imageUtil"
import TourSearchForm from "../TourSearchForm/TourSearchForm";

//@ts-ignore
const BannerTwo = ({ data }) => {
  // if (!data) return null; // Evitar erro ao renderizar antes de carregar os dados

  const { subTitle, title, bottomText, slides } = data;
  return (
    <section className="banner-two">
      <BackgroundSlider
      //@ts-ignore
        className="banner-bg-slide"
        //@ts-ignore
        images={ data? slides?.map(item => setImage(item)) : []}
        duration={10}
        transition={2}
      />
      <div className="banner-bg-slide-overly"></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="banner-two__content">
              <p className="banner-two__sub-title">{title? title : "Erro ao carregar"}</p>
              <h2 className="banner-two__title">{subTitle? subTitle : "Erro ao carregar"}</h2>
              <div className="tour-search-box">
                <TourSearchForm />
                <p className="banner-two__bottom-text">{bottomText? bottomText : "Erro ao carregar"}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerTwo;
