import ContactPage from "@/components/(landing page)/ContactPage/ContactPage";
import GoogleMap from "@/components/(landing page)/GoogleMap/GoogleMap";
import Information from "@/components/(landing page)/Information/Information";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <PageHeader title="Contact" />
      <ContactPage />
      <Information />
      <GoogleMap />
    </Layout>
  );
};

export default Contact;
