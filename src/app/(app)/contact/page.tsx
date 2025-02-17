import ContactPage from "@/components/(landing page)/ContactPage/ContactPage";
import GoogleMap from "@/components/(landing page)/GoogleMap/GoogleMap";
import Information from "@/components/(landing page)/Information/Information";
import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";



export default function Contact() {
  return (
    <Layout pageTitle="Contact">
      <PageHeader title="Contact" />
      <ContactPage />
      <Information />
      <GoogleMap />
    </Layout>
  )
}