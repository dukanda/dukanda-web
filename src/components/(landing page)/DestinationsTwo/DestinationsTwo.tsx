"use client";
import destinationsTwo from "@/data/destinationsTwo";
import React from "react";
import { Container, Image } from "react-bootstrap";
import DestinationsTwoSingle from "./DestinationsTwoSingle";
import { useQuery } from "@tanstack/react-query";
import { touristAttractions } from "@/api/routes/TouristAttractions/index.routes";
import Link from "next/link";

const { image, title, tagline, off } = destinationsTwo;

const DestinationsTwo = () => {
  const getTouristAttractions = useQuery({
    queryKey: ["touristAttractions"],
    queryFn: async () => {
      const response = await touristAttractions.getAllTouristAttractions();
      return response;
    },
  });

  const attractions = (getTouristAttractions.data?.items || []).map((item) => ({
    id: item.id,
    image: item.imageUrl,
    title: item.cityName,
    subtitle: item.name,
  }));

  return (
    <section className="relative block py-[120px] pb-[90px]">
      {/* Shape */}
      <div className="absolute top-[50px] left-[160px] animate-[animation1_5s_ease-in_infinite]">
        <Image src={image.src} alt="" />
      </div>

      <Container>
        {/* Top */}
        <div className="relative block">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left */}
            <div className="w-[60%]">
              <div className="text-left mt-[8px]">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
            </div>

            {/* Right - 2 destinos */}
            <div className="w-[80%] flex gap-3">
              {attractions.slice(3, 5).map((attraction) => (
                <DestinationsTwoSingle
                  key={attraction.id}
                  destination={attraction}
                  col={4} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="">
          <div className="w-full flex flex-col xl:flex-row gap-3  ">
            {/* Outros destinos */}
            <div className="flex flex-col  md:flex-row h-full gap-3">
              {attractions.slice(5, 8).map((attraction) => (
                <DestinationsTwoSingle
                  key={attraction.id}
                  destination={attraction}
                  col={3} // Mesmo tamanho que o banner final
                />
              ))}
            </div>

            {/* Banner final */}
            <div className="w-full  ">
              <div className=" w-[280px]   animated fadeInUp">
                <div className="h-max py-3 destinations-two__top-banner">
                  <p>Dê uma olhada</p>
                  <h2>
                    Destinos <span> mais populares</span>
                  </h2>
                  <Link href="/destinations" className="thm-btn destinations-two__btn">
                    Ver todos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DestinationsTwo;
