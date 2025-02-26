"use client";
import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import { useQuery } from "@tanstack/react-query";
import { toursRoutes } from "@/api/routes/Tours/index.routes";
import { SingleTourSkeleton } from "./SingleTour";

const { tagline, title } = popularToursTwo;

const PopularToursTwo = () => {

  const getFeaturedTours = useQuery({
    queryKey: ['getFeaturedTours'],
    queryFn: async () => {
      const response = await toursRoutes.getFeaturedTours();
      return response;
    },
  })

  return (
    <section className="popular-tours-two">
      <Container>
        {/* {!toursPage && ( */}
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        {/* )} */}
        <Row>
          {getFeaturedTours.isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Col key={index} xl={4} lg={6} md={6} className="animated fadeInUp">
                <SingleTourSkeleton />
              </Col>
            ))
          ) : (
            getFeaturedTours.data?.data.slice(0, 6).map((tour) => (
              <Col
                key={tour.id}
                xl={4}
                lg={6}
                md={6}
                className="animated fadeInUp"
              >
                <SingleTour
                  title={tour.title}
                  coverImageUrl={tour.coverImageUrl}
                  startDate={tour.startDate}
                  endDate={tour.endDate}
                  agencyName={tour.agencyName}
                  cityName={tour.cityName}
                  tourTypes={tour.tourTypes}
                  agencyLogoUrl={tour.agencyLogoUrl}
                  basePrice={tour.basePrice}
                  created={tour.created}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
