// import { destinationsDetailsLeft } from "@/data/destinationsDetails";
import React from "react";
import Image from "next/image";
// import DestinationsDetailsFaq from "./DestinationsDetailsFaq";

// const { image, discoverTitle, texts, overviewTitle, overviews, faqs } =
//   destinationsDetailsLeft;

const DestinationsDetailsLeft = ({ details }: { details: ITouristAttraction }) => {

  return (
    <div className="relative block">
      {/* Imagem */}
      <div className="relative block mb-8">
        <Image src={details.imageUrl}
          alt={`Imagem da Província do ${details.cityName}`}
          className="w-full rounded-lg"
          width={800}
          height={500}
        />
      </div>

      {/* Seção Descoberta */}
      <div className="relative block mb-8">
        <h3 className="text-xl md:text-3xl font-bold leading-[50px] tracking-wide mb-0 md:mb-4">
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
              <div className="relative block w-full">
                <p className="font-medium text-black tracking-wide m-0">{left}</p>
              </div>
              <div className="relative block w-full ">
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
      <div className=" ">
        <h3 className="text-xl md:text-3xl font-bold mb-0">Visão Geral</h3>
        <ul className="p-0">

          <li className="border-b border-gray-200 flex items-center justify-between pb-2 pt-3 ">
            <div className="relative block w-full">
              <p className="font-medium text-black tracking-wide m-0">País</p>
            </div>
            <div className="relative block ">
              <p className="text-orange-400 font-medium m-0 tracking-wide text-end w-full">Angola</p>
            </div>
          </li>

          <li className="border-b border-gray-200 flex items-center justify-between pb-2 pt-3">
            <div className="relative block w-full">
              <p className="font-medium text-black tracking-wide m-0">Língua falada</p>
            </div>
            <div className="relative block w-full ">
              <p className="text-orange-400 text-end w-full font-medium m-0 tracking-wide ">Português</p>
            </div>
          </li>

          <li className="border-b border-gray-200 flex items-center justify-between pb-2 pt-3">
            <div className="relative block w-full">
              <p className="font-medium text-black tracking-wide m-0">Moeda</p>
            </div>
            <div className="relative block w-full ">
              <p className="text-orange-400 text-end w-full font-medium m-0 tracking-wide">Kwanza (KZ)</p>
            </div>
          </li>

          <li className="border-b border-gray-200 w-full flex items-center justify-between pb-2 pt-3">
            <div className="relative block w-full">
              <p className="font-medium text-black tracking-wide m-0">Area (km2)</p>
            </div>
            <div className="relative block w-full">
              <p className="text-orange-400 text-end w-full font-medium m-0 tracking-wide  ">88.000 km2</p>
            </div>
          </li>
          <li className="border-b border-gray-200 flex items-center justify-between pb-2 pt-3">
            <div className="relative block w-full">
              <p className="font-medium text-black tracking-wide m-0">Latitude</p>
            </div>
            <div className="relative block w-full ">
              <p className="text-orange-400 text-end w-full font-medium m-0 tracking-wide">{details.latitude}</p>
            </div>
          </li>

          <li className="border-b border-gray-200 flex items-center justify-between pb-2 pt-3">
            <div className="relative block w-full">
              <p className="font-medium text-black tracking-wide m-0">Longitude</p>
            </div>
            <div className="relative block w-full ">
              <p className="text-orange-400 text-end w-full font-medium m-0 tracking-wide">{details.longitude}</p>
            </div>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default DestinationsDetailsLeft;
