"use client";
import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { useQuery } from "@tanstack/react-query";
import { touristAttractions } from "@/api/routes/TouristAttractions/index.routes";
import SingleDestination from "../DestinationsOne/SingleDestination";

const DestinationsPage = () => {

  const getTouristAttractions = useQuery({
    queryKey: ["touristAttractions"],
    queryFn: async () => {
      const response = await touristAttractions.getAllTouristAttractions();
      return response;
    }
  })

  if (getTouristAttractions.isLoading) {
    return <div>Loading...</div>;
  }

  if (getTouristAttractions.isError) {
    return <div>Error loading destinations</div>;
  }

  const destinations = getTouristAttractions.data?.items || [];

  return (
    <section className="destinations-one destinations-page">
      <Container>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {destinations.map((destination) => (
            <SingleDestination key={destination.id} destination={destination} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DestinationsPage;
