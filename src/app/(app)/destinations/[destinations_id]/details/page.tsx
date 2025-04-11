import DestinationsDetailsPage from "@/components/(landing page)/DestinationsDetails/DestinationsDetailsPage";
import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";

export default function DestinationsDetails() {
  return (
    <Layout pageTitle="Detalhe do destino">
      <PageHeader title="Detalhe do destino" page="Destino" srcImage="/dukanda_2.jpg" />
      <DestinationsDetailsPage />
    </Layout>
  )
}