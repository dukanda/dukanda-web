import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, city,guide } = tour;

  return (
    <div>

      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={require(`@/assets/images/resources/${image}`).default.src}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details" legacyBehavior>
              <a>
                {`28 de Março á 28 de Abril`}
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">

          <div className="w-full flex items-start gap-2 cursor-pointer mb-2">
            <div className="size-8 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col items-start">
              <span>
                {guide? guide : "Ango-Tour"}

              </span>
              <div className="popular-tours__stars">
                <i className="far fa-map"></i> 
                {city ? city : "Luanda"}
              </div>
            </div>
          </div>

          <h3 className="popular-tours__title">
            <Link href="/tours/12/details" legacyBehavior>{title}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>{rate} kz </span> / Pessoa
          </p>
          <ul className="popular-tours__meta list-unstyled">

            {meta.map((item, index) => (
              <li key={index}>
                <Link href="/tours/12/details" legacyBehavior>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
