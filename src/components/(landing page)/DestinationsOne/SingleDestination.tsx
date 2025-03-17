"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const SingleDestination = ({ destination }: { destination: ITouristAttraction }) => {
  const { imageUrl, name,id,cityName } = destination;

  return (
    <div>
      <Link href={`/destinations/${id}/details`} className="relative block mb-2 group size-[250px] " passHref>
        {/* Imagem e Overlay */}
        <div className="relative block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500">
          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt={name}
            className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></div>

          {/* Conteúdo */}
          <div className="absolute bottom-10 left-12 z-10">
            <h2 className="text-2xl font-bold leading-9 tracking-wide text-orange-500 ">
              <Link href={`/destinations/${id}/details`} className=" text-orange-500 hover:text-orange-500">{name}</Link>
            </h2>
          </div>

          {/* Botão */}
          <div className="absolute top-5 right-5 scale-x-0 transition-transform duration-500 group-hover:scale-x-100">
            <Link href={`/destinations/${id}/details`}
              className="font-semibold text-sm uppercase tracking-wide bg-orange-500 text-white px-4 py-1 rounded-lg transition-all duration-500 hover:bg-base hover:text-black"
            >
              {cityName}
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleDestination;
