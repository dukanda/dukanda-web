"use client";
import React, { useState } from "react";
import { differenceInDays, parseISO, isValid } from "date-fns";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const TourDetailsLeft = ({ description, packages, itineraries, startDate, endDate, selectedPackage }: ITour & { selectedPackage: Package | null }) => {
  const [active, setActive] = useState<string | null>(null);

  //Verificar se startDate e endDate são válidos antes de converter
  const start = startDate && isValid(parseISO(startDate)) ? parseISO(startDate) : null;
  const end = endDate && isValid(parseISO(endDate)) ? parseISO(endDate) : null;

  // Ordenar itinerários por displayOrder
  const sortedItineraries = itineraries ? [...itineraries].sort((a, b) => a.displayOrder - b.displayOrder) : [];

  // Calcular os dias corretos do itinerário em relação ao startDate
  const mappedItineraries = sortedItineraries.map((itinerary) => {
    const itineraryDate = parseISO(itinerary.date);
    const dayNumber = start ? differenceInDays(itineraryDate, start) + 1 : null; // Adiciona 1 para que o primeiro dia seja "Dia 1"

    return {
      ...itinerary,
      dayNumber: dayNumber && dayNumber >= 1 && end && itineraryDate <= end ? dayNumber : null, // Garante que está dentro do intervalo válido
    };
  });

  // Ordenar itinerários por dayNumber
  const orderedItineraries = mappedItineraries.sort((a, b) => (a.dayNumber ?? 0) - (b.dayNumber ?? 0));

  // Extrair benefícios únicos
  const allBenefits = (packages ?? []).flatMap((pack) => pack.benefits);
  const uniqueBenefits = Array.from(new Map(allBenefits.map((b) => [b.name, b])).values());

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Visão geral</h3>
        <p className="tour-details-two__overview-text text-justify ">{description}</p>
      </div>

      {/* Itinerário */}
      {/* <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Roteiro do passeio</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {orderedItineraries.map(({ id, title, description, dayNumber }) =>
            dayNumber ? (
              <div className={`accrodion overflow-hidden${active === id ? " active" : ""}`} key={id}>
                <div onClick={() => setActive(active === id ? null : id)} className="accrodion-title">
                  <h4>
                    <span>Dia {dayNumber}</span> {title}
                  </h4>
                </div>
                {active === id && (
                  <div className="accrodion-content animated slideInUp">
                    <div className="inner">
                      <p>{description}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : null
          )}
        </div>
      </div> */}

      {/* Itinerário */}
      <div className="mt-8 ">
        <h3 className="text-2xl font-bold mb-6">Roteiro do passeio</h3>
        <Accordion type="single" collapsible className="w-full text-lg">
          {orderedItineraries.map(({ id, title, description, dayNumber }) =>
            dayNumber ? (
              <AccordionItem key={id} value={`item-${id}`} className="border mb-3 rounded-md p-2">
                <AccordionTrigger className="text-xl flex gap-3">
                  <span className="font-bold text-orange-400 text-lg  ">Dia {dayNumber}</span>
                  <span className=" w-full flex-1">{title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 text-md">{description}</p>
                </AccordionContent>
              </AccordionItem>
            ) : null
          )}
        </Accordion>
      </div>

      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Localização</h3>
        <iframe
          title="Tour Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d75014.45327914727!2d13.206986829680629!3d-8.83654714085708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1739904809591!5m2!1spt-PT!2sao"
          className="tour-details-two__location-map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default TourDetailsLeft;
