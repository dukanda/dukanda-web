import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TourDetailsSidebar } from "./TourDetailsSidebar";
import TourDetailsLeft from "./TourDetailsLeft";

const TourDetailsTwo = ({ title, basePrice, startDate, endDate, tourTypes, cityName, agencyLogoUrl, agencyName, created, description, itineraries, packages }: ITour) => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(packages && packages.length > 0 ? packages[0] : null);

  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7} className="flex">
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
              startDate={startDate}
              endDate={endDate}
              packages={packages}
              // setSelectedPackage={setSelectedPackage}
              description={description || ""}
              selectedPackage={selectedPackage}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;