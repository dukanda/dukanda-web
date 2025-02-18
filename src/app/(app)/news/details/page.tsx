import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import NewsDetailsPage from "@/components/(landing page)/NewsDetailsPage/NewsDetailsPage";

export default function NewsDetails() {
  return (
    <Layout pageTitle="News Details">
      <PageHeader title="News Details" />
      <NewsDetailsPage />
    </Layout>
  )
}