
import BannerTwo from "@/components/(landing page)/BannerTwo/BannerTwo"
import ThreeIconBox from "@/components/(landing page)/ThreeIconBox/ThreeIconBox"
import SingaporeTour from "@/components/(landing page)/SingaporeTour/SingaporeTour"
import VideoTwo from "@/components/(landing page)/VideoTwo/VideoTwo"
import CounterOne from "@/components/(landing page)/CounterOne/CounterOne"
import DestinationsTwo from "@/components/(landing page)/DestinationsTwo/DestinationsTwo"
import AboutTwo from "@/components/(landing page)/AboutTwo/AboutTwo"
import TourTypes from "@/components/(landing page)/TourTypes/TourTypes"
import BrandTwo from "@/components/(landing page)/BrandTwo/BrandTwo"
import BookNow from "@/components/(landing page)/BookNow/BookNow"
import PopularToursTwo from "@/components/(landing page)/PopularTours/PopularToursTwo"
import Layout from "@/components/(landing page)/Layout/Layout"
import NewsTwo from "@/components/(landing page)/NewsTwo/NewsTwo"
import NewsOne from "@/components/(landing page)/NewsOne/NewsOne"

export default function App() {
  return (
    <Layout pageTitle="Ínicio">
      <BannerTwo />
      <ThreeIconBox />
      <PopularToursTwo />
      <SingaporeTour />
      <VideoTwo />
      <CounterOne />
      <DestinationsTwo />
      <AboutTwo />
      <TourTypes />
      <div className="my-20 w-full">
        
      </div>
      <NewsOne />
      <NewsTwo />
      <BookNow />
    </Layout>
  )
}