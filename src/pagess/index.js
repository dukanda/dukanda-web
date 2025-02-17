import AboutTwo from "@/components/AboutTwo/AboutTwo";
import BannerTwo from "@/components/BannerTwo/BannerTwo";
import BookNow from "@/components/BookNow/BookNow";
import BrandTwo from "@/components/BrandTwo/BrandTwo";
import CounterOne from "@/components/CounterOne/CounterOne";
import DestinationsTwo from "@/components/DestinationsTwo/DestinationsTwo";
import Layout from "@/components/Layout/Layout";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import SingaporeTour from "@/components/SingaporeTour/SingaporeTour";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import TourTypes from "@/components/TourTypes/TourTypes";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import NewsTwo from "@/components/NewsTwo/NewsTwo";
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
