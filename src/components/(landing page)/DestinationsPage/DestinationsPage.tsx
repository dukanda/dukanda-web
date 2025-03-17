"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { touristAttractions } from "@/api/routes/TouristAttractions/index.routes";
import SingleDestination from "../DestinationsOne/SingleDestination";
import {Skeleton} from "@/components/ui/skeleton";

const DestinationsPage = () => {

  const getTouristAttractions = useQuery({
    queryKey: ["touristAttractions"],
    queryFn: async () => {
      const response = await touristAttractions.getAllTouristAttractions();
      return response;
    }
  })

  if (getTouristAttractions.isLoading) {
    return (
      <section className="destinations-one destinations-page">
        <Container>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-[250px] h-[300px]">
                <Skeleton className="w-full h-full" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
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
