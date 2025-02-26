import { StarRating } from "@/components/app/star-rating/starRating";
import React, { FormEvent } from "react";
import { Col, Row } from "react-bootstrap";

const ReviewForm = ({ reviews = [] }) => {
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="tour-details__review-form">
      <h3 className="tour-details-two__title">Escrever comentário </h3>
      <Row>
        <Col xl={6}>
          <div className="tour-details__review-form-left">
            <form onSubmit={handleSubmit} className="tour-details__review-form">
              <div className="tour-details__review-form-input">
                <input type="text" placeholder="Seu nome" name="name" />
              </div>
              <div className="tour-details__review-form-input">
                <input type="email" placeholder="Seu email" name="email" />
              </div>
              <div className="tour-details__review-form-input">
                <input type="text" placeholder="Título do comentário" name="review" />
              </div>
            </form>
          </div>
        </Col>
        <Col xl={6}>
          <div className="tour-details__review-form-rate">
            {reviews.map(({ id, title, star }) => (
              <div key={id} className="tour-details__review-form-rate-single">
                <div className="tour-details__review-form-rate-left">
                  <span>{title}</span>
                </div>
                <div className="tour-details__review-form-rate-right">
                  <StarRating/>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <div className="tour-details__review-form-textarea">
        <form onSubmit={handleSubmit}>
          <textarea placeholder="Escrever comentário"></textarea>
          <button
            type="submit"
            className="thm-btn tour-details__review-form-btn"
          >
           Enviar comentário
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
