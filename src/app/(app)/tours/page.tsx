import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import PopularToursTwo from "@/components/(landing page)/PopularTours/PopularToursTwo";


export default function Tours() {
  return (
    <Layout pageTitle="Tours">
      <PageHeader title="Popular Tours" page="Tours" srcImage={"/dukanda_2.jpg"}  />
      <PopularToursTwo/>
    </Layout>
  )
}