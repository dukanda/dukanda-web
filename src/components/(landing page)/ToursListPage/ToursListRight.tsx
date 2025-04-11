"use client";

import { toursRoutes } from "@/api/routes/Tours/index.routes";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatCurrency } from "@/_utils/formatCurrency";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 10; // Número de tours por página

//@ts-ignore
const ToursListRight = ({ filters }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Sincronizar página atual com a URL
  useEffect(() => {
    const page = parseInt(searchParams.get("PageNumber") || "1", 10);
    setCurrentPage(page);
  }, [searchParams]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const queryParams = new URLSearchParams({ ...filters, PageNumber: newPage.toString() });
    router.push(`?${queryParams.toString()}`);
  };

  const getPublishedTours = useQuery({
    queryKey: ["getPublishedTours", filters],
    queryFn: async () => {
      const response = await toursRoutes.getPublishedTours({
        PageSize: 1000, // Busca todas as tours publicadas
        ...filters,
      });
      return response.data;
    },
    //@ts-ignore
    keepPreviousData: true, // Mantém os dados da página anterior enquanto carrega a nova
  });
  //@ts-ignore
  const allTours = useMemo(() => getPublishedTours.data?.items || [], [getPublishedTours.data]);

  // Filtrar tours por categoria, se aplicável
  const filteredTours = useMemo(() => {
    if (filters.type) {
      //@ts-ignore
      return allTours.filter((tour) =>
        //@ts-ignore
        tour.tourTypes?.some((type) => type.id.toString() === filters.type)
      );
    }
    return allTours;
  }, [allTours, filters]);

  // Aplicar paginação sobre as tours filtradas
  const paginatedTours = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTours.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTours, currentPage]);

  const totalPages = useMemo(() => Math.ceil(filteredTours.length / ITEMS_PER_PAGE), [filteredTours]);

  return (
    <div className="mt-12">
      <div className="space-y-6">
        {getPublishedTours.isLoading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} className="h-52 w-full rounded-lg" />
            ))}
          </div>
        ) : paginatedTours.length > 0 ? (
          //@ts-ignore
          paginatedTours.map((tour) => (
            <Link href={`/tours/${tour.id}/details`} key={tour.id} passHref className="flex flex-col md:flex-row gap-6 border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              {/* Imagem do Tour */}
              <div className="relative w-56 h-40 rounded-md overflow-hidden">
                <Image
                  src={tour.coverImageUrl ?? ""}
                  alt="Imagem do Tour"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-1 space-y-2">
                {/* Agência */}
                <div className="flex items-center gap-3">
                  <Image
                    src={tour.agencyLogoUrl ?? ""}
                    alt="Logo da Agência"
                    width={32}
                    height={32}
                    className="rounded-full w-8 h-8"
                  />
                  <span className="text-sm text-gray-700 hover:text-orange-400">
                    {tour.agencyName || "Ango-Tour"}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold hover:text-orange-400">
                  <Link href={`/tours/${tour.id}/details`} className="hover:text-orange-400">
                    {tour.title}
                  </Link>
                </h3>

                {/* Preço */}
                <p className="text-gray-700 font-medium">
                  <span className="text-orange-400 font-bold">
                    {formatCurrency(tour.basePrice ?? 0)}
                  </span>{" "}
                  / Por pessoa
                </p>

                {/* Descrição */}
                <p className="text-sm text-gray-600 line-clamp-2">{tour.description}</p>

                {/* Informações */}
                <ul className="bg-gray-100 rounded-md p-3 flex flex-col gap-1 md:flex-row justify-between text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <i className="far fa-calendar text-gray-500"></i>
                    <span>
                      {tour.startDate
                        ? format(new Date(tour.startDate), "dd MMM", { locale: ptBR })
                        : "Data inválida"}
                      <span> - </span>
                      {tour.endDate
                        ? format(new Date(tour.endDate), "dd MMM 'de' yyyy", { locale: ptBR })
                        : "Data inválida"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="far fa-map text-gray-500"></i>
                    {tour.cityName}
                  </li>
                </ul>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">
            {filters.type
              ? "Nenhuma tour encontrada para a categoria selecionada."
              : "Nenhum tour disponível no momento."}
          </p>
        )}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-4">
          <Button
            variant="outline"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <span className="text-gray-700 font-medium">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próximo
          </Button>
        </div>
      )}
    </div>
  );
};

export default ToursListRight;
