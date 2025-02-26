import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleComment = ({ comment = {} }) => {
  const {
    image,
    name,
    date,
    title,
    message,
    services,
    locations,
    amenities,
    prices,
    food,
  } = comment;

  return (
    <div className="tour-details__review-comment-single">
      <div className="tour-details__review-comment-top">
        <div className="tour-details__review-comment-top-img">
          <Image
            src={require(`@/assets/images/resources/${image}`).default.src}
            alt=""
          />
        </div>
        <div className="tour-details__review-comment-top-content">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className="tour-details__review-comment-content">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      <div className="tour-details__review-form-stars">
        <Row>
          <Col md={4}>
            <p>
              <span>Serviços</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < services ? " active" : ""}`}
                ></i>
              ))}
            </p>
            <p>
              <span>Localização</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < locations ? " active" : ""}`}
                ></i>
              ))}
            </p>
          </Col>
          <Col md={4}>
            <p>
              <span>Acomodação</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < amenities ? " active" : ""}`}
                ></i>
              ))}
            </p>
            <p>
              <span>Preços</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < prices ? " active" : ""}`}
                ></i>
              ))}
            </p>
          </Col>
          <Col md={4}>
            <p>
              <span>Alimentação</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < food ? " active" : ""}`}
                ></i>
              ))}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SingleComment;
