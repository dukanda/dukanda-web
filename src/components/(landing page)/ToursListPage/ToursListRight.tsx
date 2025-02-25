"use client";

import { toursRoutes } from "@/api/routes/Tours/index.routes";
import toursListPage from "@/data/toursListPage";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
};

const ToursListRight = () => {

  const getPublishedTours = useQuery({
    queryKey: ['getFeaturedTours'],
    queryFn: async () => {
      const response = await toursRoutes.getPublishedTours();
      return response;
    },
  })

  return (
    <div className="tours-list__right">
      <div className="tours-list__inner">
        {getPublishedTours.data?.data.items.map((tour) => {
          console.log(tour.id);
          return (
            <div key={tour.id} className="tours-list__single">
              <div className="tours-list__img">
                <Image
                  src={tour.coverImageUrl}
                  alt=""
                />

              </div>
              <div className="tours-list__content">
                <div className="w-full flex items-start gap-2 cursor-pointer mb-2">
                  <Image
                    src={tour.agencyLogoUrl}
                    alt="Agency Logo"
                    className="size-8 rounded-full"
                  />
                  <div ></div>
                  <div className="flex flex-col items-start">
                    <span>
                      {tour.agencyName ? tour.agencyName : "Ango-Tour"}

                    </span>
                  </div>
                </div>

                <h3 className="tours-list__title">
                  <Link href={`/tours/${tour.id}/details`} legacyBehavior>{tour.title}</Link>
                </h3>
                <p className="tours-list__rate">
                  <span>{formatCurrency(tour.basePrice ?? 0)} kz</span> / Por pessoa
                </p>
                <p className="tours-list__text">{tour.description}</p>
                {/* tours-list__meta list-unstyled */}
                <ul className=" bg-[#faf5ee] w-full flex justify-between rounded-md px-2 py-2.5 mb-2">
                  <li className="  flex text-sm items-center gap-1 ">
                    <Link href={`/tours/${tour.id}/details`} legacyBehavior>
                      <a className="flex items-center gap-1">
                        <i className="far fa-calendar"></i>
                        {
                          tour.startDate ? format(new Date(tour.startDate), "dd  MMM", { locale: ptBR }) : "Data inválida"
                        }
                        <span> - </span>
                        {
                          tour.endDate ? format(new Date(tour.endDate), "dd  MMM 'de' yyyy", { locale: ptBR }) : "Data inválida"
                        }
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/tours/${tour.id}/details`} legacyBehavior>
                      <a className="  flex text-sm items-center gap-1 ">
                        <i className="far fa-map"></i>
                        {tour.cityName}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
};

export default ToursListRight;
