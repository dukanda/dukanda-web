import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import ToursListPage from "@/components/(landing page)/ToursListPage/ToursListPage";


export default function ToursList() {
  return (
    <Layout pageTitle="Tours List">
        <PageHeader title="Tours List" page="Tours" />
        <ToursListPage />
    </Layout>
  )
}