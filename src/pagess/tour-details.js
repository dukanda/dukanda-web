import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/(landing page)/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/(landing page)/TourDetails/TourDetailsPage";
import React from "react";

const TourDetails = () => {
  return (
    <Layout pageTitle="Tours Details">
      <MainSliderTwo />
      <TourDetailsPage />
    </Layout>
  );
};

export default TourDetails;
