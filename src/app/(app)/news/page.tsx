import Layout from "@/components/(landing page)/Layout/Layout";
import NewsPage from "@/components/(landing page)/NewsPage/NewsPage";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";


export default function News() {
  return (
    <Layout pageTitle="News">
      <PageHeader title="Latest News" page="News" />
      <NewsPage />
    </Layout>
  )
}