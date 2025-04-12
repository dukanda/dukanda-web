import AboutPage from "@/components/(landing page)/AboutPage/AboutPage";
import BookNow from "@/components/(landing page)/BookNow/BookNow";
import BrandTwo from "@/components/(landing page)/BrandTwo/BrandTwo";
import CounterOne from "@/components/(landing page)/CounterOne/CounterOne";
import Layout from "@/components/(landing page)/Layout/Layout";
import PageHeader from "@/components/(landing page)/PageHeader/PageHeader";
import VideoTwo from "@/components/(landing page)/VideoTwo/VideoTwo";
import TeamOne from "@/components/(landing page)/TeamOne/TeamOne";
import TestimonialOne from "@/components/(landing page)/TestimonialOne/TestimonialOne";

export default function About() {
  return (
    <Layout pageTitle="About">
      <PageHeader title="About" outerPage="Pages" />
      <AboutPage />
      <BookNow />
      <TestimonialOne aboutPage />
      <VideoTwo />
     <CounterOne />
      <TeamOne />
      <BrandTwo />
    </Layout>
  )
}