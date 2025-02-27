import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
};

const SingleTour = ({ coverImageUrl, startDate, endDate, agencyName, cityName, title, basePrice, agencyLogoUrl }: ITours) => {

  const userSelect = false;
  const formattedStartDate = startDate ? format(new Date(startDate), "dd 'de' MMM", { locale: ptBR }) : "Data inválida";
  const formattedEndDate = endDate ? format(new Date(endDate), "dd 'de' MMM 'de' yyyy", { locale: ptBR }) : "Data inválida";

  return (
    <div>

      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={coverImageUrl}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details" legacyBehavior>
              <a>
                {`${formattedStartDate} á ${formattedEndDate}`}
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">

          <div className="w-full flex items-start gap-2 cursor-pointer mb-2">
            <Image
              src={agencyLogoUrl}
              alt="Agency Logo"
              className="size-8 rounded-full"
            />
            <div className="flex flex-col items-start">
              <span>
                {agencyName ? agencyName : "Ango-Tour"}

              </span>

            </div>
          </div>

          <h3 className="popular-tours__title">
            <Link href="/tours/12/details" legacyBehavior><a href="">{title}</a></Link>
          </h3>
          <p className="popular-tours__rate">
            <span>{formatCurrency(basePrice ?? 0)} </span> / Pessoa
          </p>
          <ul className="popular-tours__meta list-unstyled flex items-center justify-between ">
            <div className="popular-tours__stars">
              <i className="far fa-map"></i>
              {cityName ? cityName : "Luanda"}
            </div>
            <li>
              <Link href="/tours/12/details" legacyBehavior><a href="">3 dias</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const SingleTourSkeleton = () => {
  return (
    <div className="popular-tours__single">
      <div className="popular-tours__img bg-gray-300 animate-pulse h-64 w-full"></div>
      <div className="popular-tours__content p-4">
        <div className="w-full flex items-start gap-2 cursor-pointer mb-2">
          <div className="h-8 w-8 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="flex flex-col items-start">
            <span className="h-4 w-24 bg-gray-300 animate-pulse mb-1"></span>
            <div className="h-4 w-16 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <h3 className="h-6 w-3/4 bg-gray-300 animate-pulse mb-2"></h3>
        <p className="h-4 w-1/2 bg-gray-300 animate-pulse mb-2"></p>
        <ul className="popular-tours__meta list-unstyled">
          <li className="h-4 w-1/4 bg-gray-300 animate-pulse"></li>
        </ul>
      </div>
    </div>
  );
};

export { SingleTourSkeleton };

export default SingleTour;
