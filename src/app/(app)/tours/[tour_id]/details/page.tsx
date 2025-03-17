"use client";
import Layout from "@/components/(landing page)/Layout/Layout";
import MainSliderTwo from "@/components/(landing page)/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/(landing page)/TourDetails/TourDetailsPage";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { toursRoutes } from "@/api/routes/Tours/index.routes";
import { ChevronLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TourDetails() {
  const { tour_id } = useParams();

  const getTourById = useQuery({
    queryKey: ['getTourById', tour_id],
    queryFn: async () => {
      const response = await toursRoutes.getTourById(tour_id as string);
      return response;
    },
  })

  if (getTourById.isLoading) {
    return (
      <Layout pageTitle="Tours Details">
        <div className="flex flex-col items-center justify-center h-96">
          <Skeleton className="h-10 w-72 mb-4" />
          <Skeleton className="h-48 w-full mb-4" />
          <Skeleton className="h-10 w-24" />
        </div>
      </Layout>
    )
  }

  if (getTourById.data?.data === undefined) {
    return (
      <Layout pageTitle="Tours Details">
        <div className="flex flex-col items-center justify-center h-96">
          <p>Tour não encontrada!</p>
          <button className=" h-10 bg-orange-500 text-white rounded-[8px] px-2 flex gap-2 items-center justify-between" style={{ borderRadius: "8px" }}
            onClick={() => window.location.href = "/"}
          >
            <ChevronLeft />
            Voltar
          </button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout pageTitle="Tours Details">
      <MainSliderTwo coverImageUrl={getTourById.data?.data.coverImageUrl as string} />
      <TourDetailsPage
        title={getTourById.data?.data.title as string}
        basePrice={getTourById.data?.data.basePrice as number}
        startDate={getTourById.data?.data.startDate as string}
        endDate={getTourById.data?.data.endDate as string}
        tourTypes={getTourById.data?.data.tourTypes as TourType[]}
        cityName={getTourById.data?.data.cityName as string}
        agencyLogoUrl={getTourById.data?.data.agencyLogoUrl as string}
        agencyName={getTourById.data?.data.agencyName as string}
        created={getTourById.data?.data.created as string}
        description={getTourById.data?.data.description as string}
        itineraries={getTourById.data?.data.itineraries as Itinerary[]}
        packages={getTourById.data?.data.packages as Package[]}
      />
    </Layout>
  )
}