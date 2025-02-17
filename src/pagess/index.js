import React from "react";
import Layout from "@/components/(landing page)/Layout/Layout";
import BannerTwo from "@/components/(landing page)/BannerTwo/BannerTwo";
import ThreeIconBox from "@/components/(landing page)/ThreeIconBox/ThreeIconBox";
import PopularToursTwo from "@/components/(landing page)/PopularToursTwo/PopularToursTwo";
import SingaporeTour from "@/components/(landing page)/SingaporeTour/SingaporeTour";
import VideoTwo from "@/components/(landing page)/VideoTwo/VideoTwo";
import CounterOne from "@/components/(landing page)/CounterOne/CounterOne";
import DestinationsTwo from "@/components/(landing page)/DestinationsTwo/DestinationsTwo";
import AboutTwo from "@/components/(landing page)/AboutTwo/AboutTwo";
import TourTypes from "@/components/(landing page)/TourTypes/TourTypes";
import BrandTwo from "@/components/(landing page)/BrandTwo/BrandTwo";
import NewsTwo from "@/components/(landing page)/NewsTwo/NewsTwo";
import BookNow from "@/components/(landing page)/BookNow/BookNow";
import fetchBannerData from "@/api/Banner/getBanner";

const Home2 = ({ bannerData }) => {
  return (
    <Layout pageTitle="Ínicio">
      <BannerTwo data={bannerData} />
      <ThreeIconBox />
      <PopularToursTwo />
      <SingaporeTour />
      <VideoTwo />
      <CounterOne />
      <DestinationsTwo />
      <AboutTwo />
      <TourTypes />
      <BrandTwo />
      <NewsTwo />
      <BookNow />
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const bannerData = await fetchBannerData();

    return {
      props: {
        bannerData,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar os dados do banner:", error);
    return {
      props: {
        bannerData: null, // Retorna null para evitar erros no componente
      },
    };
  }
}

export default Home2;
