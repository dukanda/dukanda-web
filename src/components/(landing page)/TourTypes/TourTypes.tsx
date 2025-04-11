"use client";
import { tourTypesRoutes } from "@/api/routes/Tour-Types/index.routes";
import { useQuery } from "@tanstack/react-query";
import tourTypes from "@/data/tourTypes";
import React from "react";
import { Container } from "react-bootstrap";
import { Mountain, Utensils, Trees, SquareLibrary, Waves } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

const { bg } = tourTypes;

const iconMap: Record<string, React.ElementType> = {
  mountain: Mountain,
  museum: SquareLibrary,
  utensils: Utensils,
  tree: Trees,
  "umbrella-beach": Waves,
};

const SkeletonItem = () => (
  <li className="tour-types__single animated fadeInUp">
    <div className="tour-types__content">
      <div className="tour-types__icon text-center">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>
      <h4 className="tour-types__title">
        <Skeleton className="w-24 h-4 mt-2" />
      </h4>
    </div>
  </li>
);

const TourTypes = () => {
  const router = useRouter();
  const { data: tourTypesData, isLoading, isError } = useQuery({
    queryKey: ["tourTypesData"],
    queryFn: async () => await tourTypesRoutes.getToursTypes(),
  });

  const handleTourTypeClick = (category: number) => {
    router.push(`/tours/list?type=${category}`);
  };

  if (isError) return <p>Erro ao carregar os tipos de viagem.</p>;

  return (
    <section className="tour-types">
      <Container>
        <div
          className="tour-types-map"
          style={{ backgroundImage: ` url(${bg.src})` }}
        ></div>
        <div className="section-title text-center">
          <span className="section-title__tagline">Encontre uma viagem perfeita</span>
          <h2 className="section-title__title">Escolha o tipo de viagem que você deseja</h2>
        </div>
        <ul className="list-unstyled tour-types_list">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => <SkeletonItem key={index} />)
            : tourTypesData?.items.map(({ id, icon, name }) => {
              const IconComponent = iconMap[icon] || null;
              return (
                <li
                  key={id}
                  className="tour-types__single animated fadeInUp"
                  onClick={() => handleTourTypeClick(id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="tour-types__content">
                    <div className="tour-types__icon text-center">
                      <span className="flex items-center justify-center">
                        {IconComponent && <IconComponent size={48} className="icon" />}
                      </span>
                    </div>
                    <h4 className="tour-types__title">{name}</h4>
                  </div>
                </li>
              );
            })}
        </ul>
      </Container>
    </section>
  );
};

export default TourTypes;