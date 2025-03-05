import DestinationsPage from "@/components/(landing page)/DestinationsPage/DestinationsPage";
import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";

export default function Destinations() {
  return (
    <Layout pageTitle="Destinations">
      <PageHeader title="Destinations" />
      <DestinationsPage />
    </Layout>
  )
}