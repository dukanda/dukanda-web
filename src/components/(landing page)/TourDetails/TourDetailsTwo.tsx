import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TourDetailsSidebar } from "./TourDetailsSidebar";
import TourDetailsLeft from "./TourDetailsLeft";

const TourDetailsTwo = ({ title, basePrice, startDate, endDate, tourTypes, cityName, agencyLogoUrl, agencyName, created, description, itineraries, packages }: ITour) => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

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
              selectedPackage={selectedPackage}
            />
          </Col>
          <Col xl={4} lg={5}>
            <TourDetailsSidebar
              packages={packages}
              setSelectedPackage={setSelectedPackage}
              description={description || ""}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;