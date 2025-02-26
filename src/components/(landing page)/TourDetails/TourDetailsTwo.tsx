import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TourDetailsSidebar } from "./TourDetailsSidebar";
import TourDetailsLeft from "./TourDetailsLeft";

const TourDetailsTwo = ({ title, basePrice, startDate, endDate, tourTypes, cityName, agencyLogoUrl, agencyName, created, description, itineraries, packages }: ITour) => {
  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <TourDetailsLeft
              description={description}
              itineraries={itineraries}
              packages={packages}
              startDate={startDate}
              endDate={endDate}
            />
          </Col>
          <Col xl={4} lg={5}>
            <TourDetailsSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;
