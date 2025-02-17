import DestinationsDetailsPage from "@/components/(landing page)/DestinationsDetails/DestinationsDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import React from "react";

const DestinationsDetails = () => {
  return (
    <Layout pageTitle="Destinations Details">
      <PageHeader title="Destinations Details" page="Destinations" />
      <DestinationsDetailsPage />
    </Layout>
  );
};

export default DestinationsDetails;
