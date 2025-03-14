"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DestinationsDetailsRight from "./DestinationsDetailsRight";
import DestinationsDetailsLeft from "./DestinationsDetailsLeft";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { touristAttractions } from "@/api/routes/TouristAttractions/index.routes";

const DestinationsDetailsPage = () => {
  const { destinations_id } = useParams();
  const destinationDetails = useQuery({
    queryKey: ["destinationDetails"],
    queryFn: async () => {
      if (typeof destinations_id === 'string') {
        const response = await touristAttractions.getTouristAttractionsById(destinations_id);
        return response;
      }
      throw new Error("Invalid destination ID");
    }
  })

  if (destinationDetails.isLoading) {
    return <div>Loading...</div>;
  }

  console.log(destinationDetails.data);
  if (!destinationDetails.data) {
    return <div>Error: Destination details not found</div>;
  }

  return (
    <section className="destinations-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <DestinationsDetailsLeft details={destinationDetails.data} />
          </Col>
          <Col xl={4} lg={5}>
            <DestinationsDetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;
