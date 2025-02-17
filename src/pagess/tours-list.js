import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import ToursListPage from "@/components/(landing page)/ToursListPage/ToursListPage";
import React from "react";

const ToursList = () => {
  return (
    <Layout pageTitle="Tours List">
      <PageHeader title="Tours List" page="Tours" />
      <ToursListPage />
    </Layout>
  );
};

export default ToursList;
