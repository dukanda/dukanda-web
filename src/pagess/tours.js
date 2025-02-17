import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import PopularToursTwo from "@/components/(landing page)/PopularTours/PopularToursTwo";
import React from "react";

const Tours = () => {
  return (
    <Layout pageTitle="Tours">
      <PageHeader title="Popular Tours" page="Tours" />
      <PopularToursTwo toursPage />
    </Layout>
  );
};

export default Tours;
