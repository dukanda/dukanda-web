import Layout from "@/components/Layout/Layout";
import NewsPage from "@/components/(landing page)/NewsPage/NewsPage";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import React from "react";

const News = () => {
  return (
    <Layout pageTitle="News">
      <PageHeader title="Latest News" page="News" />
      <NewsPage />
    </Layout>
  );
};

export default News;
