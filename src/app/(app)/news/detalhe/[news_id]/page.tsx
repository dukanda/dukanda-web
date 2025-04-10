"use client";
import { newsRoutes } from "@/api/routes/News/index.routes";
import Layout from "@/components/(landing page)/Layout/Layout";
import NewsDetailsPage from "@/components/(landing page)/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function NewsDetails() {
  const { news_id } = useParams() as { news_id: string };
  const getNewsDetails = useQuery({
    queryKey: ["newsDetails"],
    queryFn: async () => await newsRoutes.getNewsById(news_id),
  })

  return (
    <Layout pageTitle="News Details">
      <PageHeader title="Detalhes da noticia" srcImage={"/dukanda_2.jpg"} />
      <NewsDetailsPage
        title={getNewsDetails.data?.title}
        description={getNewsDetails.data?.content}
        coverImageUrl={getNewsDetails.data?.coverImageUrl}
        content={getNewsDetails.data?.content}
        tags={getNewsDetails.data?.tags.split(" ")}
        publishedAt={getNewsDetails.data?.publishedAt}
      />
    </Layout>
  )
}