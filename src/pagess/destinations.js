import DestinationsPage from "@/components/(landing page)/DestinationsPage/DestinationsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import React from "react";

const Destinations = () => {
  return (
    <Layout pageTitle="Destinations">
      <PageHeader title="Destinations" />
      <DestinationsPage />
    </Layout>
  );
};

export default Destinations;
