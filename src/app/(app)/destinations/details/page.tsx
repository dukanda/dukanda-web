import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import DestinationsDetailsPage from "@/components/(landing page)/DestinationsDetails/DestinationsDetailsPage";

export default function DestinationsDetails() {
  return (
    <Layout pageTitle="Destinations Details">
      <PageHeader title="Destinations Details" page="Destinations" />
      <DestinationsDetailsPage />
    </Layout>
  )
}