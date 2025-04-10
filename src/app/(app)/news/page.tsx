import Layout from "@/components/(landing page)/Layout/Layout";
import NewsPage from "@/components/(landing page)/NewsPage/NewsPage";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";


export default function News() {
  return (
    <Layout pageTitle="News">
      <PageHeader title="Ultimas Notícias" page="News" srcImage={"/dukanda_2.jpg"} />
      <NewsPage />
    </Layout>
  )
}