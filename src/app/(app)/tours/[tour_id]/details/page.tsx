"use client";
import Layout from "@/components/(landing page)/Layout/Layout";
import MainSliderTwo from "@/components/(landing page)/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/(landing page)/TourDetails/TourDetailsPage";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { toursRoutes } from "@/api/routes/Tours/index.routes";

export default function TourDetails() {
  const { tour_id } = useParams();

  const getTourById = useQuery({
    queryKey: ['getTourById', tour_id],
    queryFn: async () => {
      const response = await toursRoutes.getTourById(tour_id as string);
      return response;
    },
  })
  // console.log("api", getTourById.data?.data);

  // console.log(" tour_id",tour_id);

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