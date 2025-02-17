import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/(landing page)/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import React from "react";

const NewsDetails = () => {
  return (
    <Layout pageTitle="News Details">
      <PageHeader title="News Details" />
      <NewsDetailsPage />
    </Layout>
  );
};

export default NewsDetails;
