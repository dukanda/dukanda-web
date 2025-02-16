import popularToursTwo from "@/data/popularToursTwo";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import { api } from "@/api/api";

const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ toursPage = false }) => {
  const [tours, setTours] = useState();

  async function tourRoutesData() {
    const response = await api.get("/tours?populate=*");
    return response.data;
  }

  useEffect(() => {
    tourRoutesData().then((data) => {
      setTours(data.data); // Ajustado para acessar o array correto
      console.log("tourRoutesData", data.data);
    });
  }, []);

  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {tours?.map((tour) => (
            <Col key={tour.id} xl={4} lg={6} md={6} className="animated fadeInUp">
              <SingleTour tour={tour} userSelect /> {/* Aqui está a correção */}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;


/*

  
*/