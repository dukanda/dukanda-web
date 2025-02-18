import Layout from "@/components/(landing page)/Layout/Layout";
import MainSliderTwo from "@/components/(landing page)/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/(landing page)/TourDetails/TourDetailsPage";


export default function TourDetails() {
  return (
    <Layout pageTitle="Tours Details">
      <MainSliderTwo />
      <TourDetailsPage />
    </Layout>
  )
}