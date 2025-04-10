"use client";

import ShareButton from "@/components/app/share-button/shareButton";
import React from "react";
import Image from "next/image";
import { formatCurrency } from "@/_utils/formatCurrency";
import { calculateDuration, calculatePostedDate } from "@/_utils/calculateDuration";
import { DialogPayment } from "@/components/ui/dialog/dialog-payment";
import { Clock } from "lucide-react";

const TourDetailsOne = ({
  title,
  basePrice,
  startDate,
  endDate,
  tourTypes,
  cityName,
  agencyLogoUrl,
  agencyName,
  created,
}: ITour) => {
  const duration = startDate && endDate ? calculateDuration(startDate, endDate) : "N/A";
  const postedDate = created ? calculatePostedDate(created) : "N/A";

  return (
    <section className="relative flex flex-col">
      {/* Top Section */}
      <div className=" py-12 bg-[#faf5ee]">
        <div className="px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left Side */}
            <div className="text-center w-full lg:text-left">
              <h2 className="text-2xl font-bold leading-tight tracking-wide mb-2">{title}</h2>
              <p className="text-lg">
                <span className="text-[var(--thm-primary)] font-bold text-xl">{formatCurrency(basePrice ?? 0)}</span> / Por pessoa
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col md:flex-row gap-8 w-full  ">
              <div className="flex w-max items-center gap-3">
                <span className="text-[35px] text-[var(--thm-primary)] transition-transform duration-200 hover:scale-110">
                  <i className="icon-clock"></i>
                </span>
                <div>
                  <p className="text-sm">Duração</p>
                  <h6 className="text-lg">{duration}</h6>
                </div>
              </div>

              <div className="flex items-center gap-3 ">
                <span className="text-[35px] text-[var(--thm-primary)] transition-transform duration-200 hover:scale-110">
                  <i className="icon-plane"></i>
                </span>

                <div>
                  <p className="text-sm">Tipo de Passeio</p>
                  <div className="flex gap-1">
                    {tourTypes?.map((tourType: TourType, index) => (
                      <h6 key={tourType.id} className="text-lg flex">
                        {tourType.name}
                        {index < tourTypes.length - 1 && ","}
                      </h6>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[35px] text-[var(--thm-primary)] transition-transform duration-200 hover:scale-110">
                  <i className="icon-place"></i>
                </span>
                <div>
                  <p className="text-sm">Localização</p>
                  <h6 className="text-lg">{cityName}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 py-4">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Side */}
          <div className="flex items-center gap-4 w-full">
            <Image
              alt="Agency Image"
              className="w-12 h-12 bg-gray-200 rounded-full"
              src={agencyLogoUrl ?? "/default-logo.png"}
              width={40}
              height={40}
            />

            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <span className="text-lg  ">{agencyName}</span>
              <div className="flex text-yellow-500">
                {Array.from(Array(5)).map((_, i) => (
                  <i key={i} className="fa fa-star"></i>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-3 ">
              <Clock className="text-[16px] text-[var(--thm-primary)]" />
              <span className="text-lg">Postado {postedDate}</span>
            </div>

            {/* Mobile Payment Dialog */}
            <div className="block lg:hidden">
              {/* @ts-ignore */}
              <DialogPayment />
            </div>

            {/* Share Button */}
            {/* <ShareButton open={isOpen} setOpen={() => setIsOpen(!isOpen)}>
              <i className="fas fa-share"></i> Partilhar
            </ShareButton> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetailsOne;
