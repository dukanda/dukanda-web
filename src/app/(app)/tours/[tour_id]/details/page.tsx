"use client";
import Layout from "@/components/(landing page)/Layout/Layout";
import MainSliderTwo from "@/components/(landing page)/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/(landing page)/TourDetails/TourDetailsPage";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { toursRoutes } from "@/api/routes/Tours/index.routes";

export default function TourDetails() {
const {tour_id} = useParams();

const getTourById = useQuery({
  queryKey: ['getTourById', tour_id],
  queryFn: async () => {
    const response = await toursRoutes.getTourById(tour_id as string);
    return response;
  },
})
// console.log("api", getTourById.data?.data.coverImageUrl);

// console.log(" tour_id",tour_id);

  return (
    <Layout pageTitle="Tours Details">
      <MainSliderTwo coverImageUrl={getTourById.data?.data.coverImageUrl as string} />
      <TourDetailsPage />
    </Layout>
  )
}