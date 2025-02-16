import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import { format, differenceInDays } from "date-fns";


const SingleTour = ({ tour = {}, userSelect = false }) => {
  // const { image, title, meta, rate, city } = tour;
  const startDate = new Date(tour.start_date);
  const endDate = new Date(tour.end_date);
  const duration = differenceInDays(endDate, startDate); // 28 dias
  const formattedStartDate = format(startDate, "MMM dd");
  const formattedEndDate = format(endDate, "MMM dd");
  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            width={500}
            height={500}
            src={`https://strapidev.dukanda.ao${tour.cover.url}`}
            alt={tour.cover.name || "Imagem do evento"}
          />

          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <a>
                {`${formattedStartDate} a ${formattedEndDate}`}
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="far fa-map"></i> {tour.name}
          </div>
          <h3 className="popular-tours__title">
            <Link href="/tour-details">{tour.name}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>{"5000 kz"}</span> / Pessoa
          </p>
          <ul className="popular-tours__meta list-unstyled">
            <li>
              <Link href="/tour-details">{`${duration} dias /  Ango-Viagens`}</Link>
            </li>

            {/* {meta.map((item, index) => (
    <li key={index}>
      <Link href="/tour-details">{item}</Link>
    </li>
  ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
