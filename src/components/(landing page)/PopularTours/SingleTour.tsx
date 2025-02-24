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
              <div className="popular-tours__stars">
                <i className="far fa-map"></i>
                {cityName ? cityName : "Luanda"}
              </div>
            </div>
          </div>

          <h3 className="popular-tours__title">
            <Link href="/tours/12/details" legacyBehavior><a href="">{title}</a></Link>
          </h3>
          <p className="popular-tours__rate">
            <span>{formatCurrency(basePrice ?? 0)} </span> / Pessoa
          </p>
          <ul className="popular-tours__meta list-unstyled">

            {/* {meta.map((item, index) => ( */}
            <li>
              <Link href="/tours/12/details" legacyBehavior><a href="">3 dias</a></Link>
            </li>
            {/* ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
