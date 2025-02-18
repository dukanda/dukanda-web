import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import ToursListPage from "@/components/(landing page)/ToursListPage/ToursListPage";


export default function ToursList() {
  return (
    <Layout pageTitle="Lista de passeios">
        <PageHeader title="Lista de passeios" page="Passeios" />
        <ToursListPage />
    </Layout>
  )
}