import { destinationsDetailsLeft } from "@/data/destinationsDetails";
import React from "react";
import { Image } from "react-bootstrap";
// import DestinationsDetailsFaq from "./DestinationsDetailsFaq";

const { image, discoverTitle, texts, overviewTitle, overviews, faqs } =
  destinationsDetailsLeft;

const DestinationsDetailsLeft = ({ details }: { details: ITouristAttraction }) => {

  console.log("details", details);
  return (
    <div className="relative block">
      {/* Imagem */}
      <div className="relative block mb-8">
        <Image src={details.imageUrl} alt="" className="w-full rounded-lg" />
      </div>

      {/* Seção Descoberta */}
      <div className="relative block mb-8">
        <h3 className="text-4xl font-bold leading-[50px] tracking-wide mb-4">
          Descobrindo - {details.cityName}
        </h3>
        {/* {texts.map((text, index) => (
          <p
            key={index}
            className={`text-base ${index === 0 ? "pb-8" : ""}`}
          >
            {text}
          </p>
        ))} */}
        <p className="text-base text-justify">{details.description}</p>
      </div>

      {/* Visão Geral */}
      {/* <div className="relative block">
        <h3 className="text-3xl font-bold mb-0">Visão Geral</h3>
        <ul className="relative block mt-[-16px] list-none">
          {overviews.map(({ id, left, right }) => (
            <li key={id} className="relative border-b border-gray-200 overflow-hidden pt-5 pb-4 last:border-0 flex">
              <div className="relative block max-w-[155px] w-full">
                <p className="font-medium text-black tracking-wide m-0">{left}</p>
              </div>
              <div className="relative block max-w-[245px] ml-[150px]">
                <p className="text-primary font-medium m-0 tracking-wide">{right}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}

      {/* original */}
      {/* <div className="destinations-details__overview">
        <h3 className="destinations-details__title">{overviewTitle}</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          {overviews.map(({ id, left, right }) => (
            <li key={id}>
              <div className="destinations-details__overview-left">
                <p>{left}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{right}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}


      {/* Visão Geral */}
      <div className="relative block">
        <h3 className="text-3xl font-bold mb-0">Visão Geral</h3>
        <ul className="relative block mt-[-16px] list-none">
          <li className="relative border-b border-gray-200 overflow-hidden pt-4 pb-2 last:border-0 flex">
            <div className="relative block max-w-[155px] w-full">
              <p className="font-medium text-black tracking-wide m-0">País</p>
            </div>
            <div className="relative block max-w-[245px] ml-[150px]">
              <p className="text-orange-400 font-medium m-0 tracking-wide">Angola</p>
            </div>
          </li>
          <li className="relative border-b border-gray-200 overflow-hidden pt-4 pb-2 last:border-0 flex">
            <div className="relative block max-w-[155px] w-full">
              <p className="font-medium text-black tracking-wide m-0">Língua falada</p>
            </div>
            <div className="relative block max-w-[245px] ml-[150px]">
              <p className="text-orange-400 font-medium m-0 tracking-wide">Português</p>
            </div>
          </li>

          <li className="relative border-b border-gray-200 overflow-hidden pt-4 pb-2 last:border-0 flex">
            <div className="relative block max-w-[155px] w-full">
              <p className="font-medium text-black tracking-wide m-0">Moeda</p>
            </div>
            <div className="relative block max-w-[245px] ml-[150px]">
              <p className="text-orange-400 font-medium m-0 tracking-wide">Kwanza (KZ)</p>
            </div>
          </li>

          <li className="relative border-b border-gray-200 overflow-hidden pt-4 pb-2 last:border-0 flex">
            <div className="relative block max-w-[155px] w-full">
              <p className="font-medium text-black tracking-wide m-0">Area (km2)</p>
            </div>
            <div className="relative block max-w-[245px] ml-[150px]">
              <p className="text-orange-400 font-medium m-0 tracking-wide">88.000 km2</p>
            </div>
          </li>
          <li className="relative border-b border-gray-200 overflow-hidden pt-4 pb-2 last:border-0 flex">
            <div className="relative block max-w-[155px] w-full">
              <p className="font-medium text-black tracking-wide m-0">Latitude</p>
            </div>
            <div className="relative block max-w-[245px] ml-[150px]">
              <p className="text-orange-400 font-medium m-0 tracking-wide">{details.latitude}</p>
            </div>
          </li>

          <li className="relative border-b border-gray-200 overflow-hidden pt-4 pb-2 last:border-0 flex">
            <div className="relative block max-w-[155px] w-full">
              <p className="font-medium text-black tracking-wide m-0">Longitude</p>
            </div>
            <div className="relative block max-w-[245px] ml-[150px]">
              <p className="text-orange-400 font-medium m-0 tracking-wide">{details.longitude}</p>
            </div>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default DestinationsDetailsLeft;
