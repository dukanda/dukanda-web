import AboutOne from "@/components/(landing page)/AboutOne/AboutOne";
import BrandOne from "@/components/(landing page)/BrandOne/BrandOne";
import DestinationsOne from "@/components/(landing page)/DestinationsOne/DestinationsOne";
import GalleryOne from "@/components/(landing page)/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/(landing page)/MainSlider/MainSlider";
import NewsOne from "@/components/(landing page)/NewsOne/NewsOne";
import PopularTours from "@/components/(landing page)/PopularTours/PopularTours";
import TestimonialOne from "@/components/(landing page)/TestimonialOne/TestimonialOne";
import TourSearch from "@/components/(landing page)/TourSearch/TourSearch";
import VideoOne from "@/components/(landing page)/VideoOne/VideoOne";
import WhyChoose from "@/components/(landing page)/WhyChoose/WhyChoose";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <MainSlider />
      <TourSearch />
      <DestinationsOne />
      <AboutOne />
      <PopularTours />
      <VideoOne />
      <BrandOne />
      <TestimonialOne />
      <GalleryOne />
      <WhyChoose />
      <NewsOne />
    </Layout>
  );
};

export default Home;
