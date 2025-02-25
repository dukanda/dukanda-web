"use client";
import ShareButton from "@/components/app/share-button/shareButton";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { formatCurrency } from "@/_utils/formatCurrency";
import { calculateDuration, calculatePostedDate } from "@/_utils/calculateDuration";

const TourDetailsOne = ({ title, basePrice, startDate, endDate, tourTypes, cityName, agencyLogoUrl, agencyName, created }: ITour) => {

  const duration = startDate && endDate ? calculateDuration(startDate, endDate) : 'N/A';
  const postedDate = created ? calculatePostedDate(created) : 'N/A';

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
                    <span>{formatCurrency(basePrice ?? 0)}</span> / Por pessoa
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
                        <span className="icon-plane"></span>
                      </div>
                      <div className="text">
                        <p>Tipo de Passeio</p>
                        {
                          tourTypes?.map((tourType: TourType) => (
                            <h6 key={tourType.id}>{tourType.name}</h6>
                          ))
                        }
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Localização</p>
                        <h6>{cityName}</h6>
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
                    <li className="flex items-center gap-2 ">
                      <Image
                        alt="Agency Image"
                        className=" size-10 bg-gray-200 rounded-full"
                        src={agencyLogoUrl}
                      />
                      <span>{agencyName}</span>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Postado {postedDate}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                {/* <div className="tour-details__bottom-right">
                  <ShareButton open={isOpen} setOpen={() => setIsOpen(!isOpen)}>
                    <i className="fas fa-share"></i> Partilhar
                  </ShareButton>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TourDetailsOne;
