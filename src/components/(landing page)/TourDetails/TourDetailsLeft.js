"use client";
import SingleTour from "@/components/(landing page)/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } = tourDetailsLeft;

const TourDetailsLeft = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Visão geral</h3>
        <p className="tour-details-two__overview-text">{overview}</p>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Incluído/Não incluído</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {overviewList.slice(0, 4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tour-details-two__overview-bottom-right">
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Itinerário do passeio
        </h3>
        <div className="accrodion-grp faq-one-accrodion">
          {faq.map(({ id, title, text, lists }) => (
            <div className={`accrodion overflow-hidden${active === id ? " active" : ""}`} key={id}>
              <div onClick={() => setActive(active === id ? null : id)} className="accrodion-title">
                <h4>
                  <span>Dia {id}</span> {title}
                </h4>
              </div>
              {active === id && (
                <div className="accrodion-content animated slideInUp">
                  <div className="inner">
                    <p>{text}</p>
                    <ul className="list-unstyled">
                      {lists.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Localização</h3>
        <iframe
          title="Tour Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d75014.45327914727!2d13.206986829680629!3d-8.83654714085708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1739904809591!5m2!1spt-PT!2sao"
          className="tour-details-two__location-map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="tour-details-two__related-tours">
        <h3 className="tour-details-two__title">Passeios relacionados
        </h3>
        <Row>
          {popularTours.slice(0, 2).map((tour) => (
            <Col xl={6} key={tour.id}>
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </div>
      <h3 className="tour-details-two__title review-scores__title">Pontuações de revisão
      </h3>
      <div className="tour-details__review-score">
        <div className="tour-details__review-score-ave">
          <div className="my-auto">
            <h3>{superb}</h3>
            <p>
              <i className="fa fa-star"></i> Super
            </p>
          </div>
        </div>
        {reviewScore?.length > 0 && (
          <div className="tour-details__review-score__content">
            {reviewScore.map((review) => (
              <ReviewScoreBar review={review} key={review.id} />
            ))}
          </div>
        )}

      </div>
      {comments?.length > 0 && (
        <div className="tour-details__review-comment">
          {comments.map((comment) => (
            <SingleComment comment={comment} key={comment.id} />
          ))}
        </div>
      )}
      <ReviewForm reviews={reviews} /> 
    </div>
  );
};

export default TourDetailsLeft;
