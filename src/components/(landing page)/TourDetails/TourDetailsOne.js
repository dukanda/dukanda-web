import { tourDetailsOne } from "@/data/tourDetailsPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { title, rate, duration, minAge, tourType, location, date, superb } =
  tourDetailsOne;

const TourDetailsOne = () => {
  return (
    <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{title}</h2>
                  <p className="tour-details__top-rate">
                    <span>{rate} kz</span> / Por pessoa
                  </p>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Duração</p>
                        <h6>{duration}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                      <div className="text">
                        <p>Min Idade</p>
                        <h6>{minAge}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-plane"></span>
                      </div>
                      <div className="text">
                        <p>Tipo de Passeio</p>
                        <h6>{tourType}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Localização</p>
                        <h6>{location}</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="tour-details__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__bottom-inner">
                <div className="tour-details__bottom-left">
                  <ul className="list-unstyled tour-details__bottom-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Postado {date}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>{superb} Superb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tour-details__bottom-right">
                  <a href="#">
                    <i className="fas fa-share"></i>Partilha
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TourDetailsOne;
