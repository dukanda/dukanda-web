"use client";

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-AO", { style: "currency", currency: "AOA" });
};

function SingleTour({
  coverImageUrl,
  startDate,
  endDate,
  agencyName,
  cityName,
  title,
  basePrice,
  agencyLogoUrl,
  id,
}: ITours) {
  const formattedStartDate = startDate
    ? format(new Date(startDate), "dd 'de' MMM", { locale: ptBR })
    : "Data inválida";
  const formattedEndDate = endDate
    ? format(new Date(endDate), "dd 'de' MMM 'de' yyyy", { locale: ptBR })
    : "Data inválida";

  return (
    <Card className="w-full max-w-sm mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border">
      {/* Imagem */}
      <div className="relative group">
        <Link href={`/tours/${id}/details`} passHref>
          <Image
            src={coverImageUrl || ""}
            alt={title || "Tour Image"}
            width={370}
            height={259}
            className="w-full h-[259px] object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
          />
          <Button
            variant="default"
            className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md"
          >
            {formattedStartDate} - {formattedEndDate}
          </Button>
        </Link>
      </div>

      {/* Conteúdo */}
      <CardContent className="p-5 border border-gray-200 border-t-0 rounded-b-lg">
        {/* Agência */}
        <Link href={`/tours/${id}/details`} passHref className="flex items-center gap-2 mb-2">
          <Image src={agencyLogoUrl || ""} alt="Agency Logo" width={32} height={32} className="rounded-full size-8" />
          <span className="text-sm font-medium text-gray-700">{agencyName || "Ango-Tour"}</span>
        </Link>

        {/* Título */}
        <h3>
          <Link href={`/tours/${id}/details`} className="text-lg font-semibold text-gray-900 hover:text-orange-400 transition-colors">{title}</Link>
        </h3>

        {/* Preço */}
        <p className="text-sm text-gray-600 mt-1">
          <span className="text-lg font-bold text-orange-500">{formatCurrency(basePrice ?? 0)}</span> / Pessoa
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 mt-3">
          <div className="text-sm text-gray-700 flex items-center gap-1">
            <i className="far fa-map text-orange-500"></i>
            {cityName || "Luanda"}
          </div>
          <span className="text-sm text-gray-500">3 dias</span>
        </div>
      </CardContent>
    </Card>
  );
}

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
