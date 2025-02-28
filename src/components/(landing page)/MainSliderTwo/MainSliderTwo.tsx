"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import SingleSlide from "./SingleSlide";

// Configuração do Swiper
const mainSlideOptions = {
  modules: [Autoplay, EffectFade, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSliderTwo = ({ coverImageUrl }: { coverImageUrl: string }) => {
  return (
    <section className="relative overflow-hidden">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <SingleSlide coverImageUrl={coverImageUrl} />
        </SwiperSlide>
      </Swiper>

      {/* Botões de navegação */}
      <div className="absolute inset-0 flex justify-between items-center px-10">
        <button
          id="main-slider__swiper-button-prev"
          className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white text-white opacity-20 hover:opacity-100 transition duration-500 rotate-180"
        >
          <span className="icon-right-arrow text-2xl"></span>
        </button>
        <button
          id="main-slider__swiper-button-next"
          className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white text-white opacity-20 hover:opacity-100 transition duration-500"
        >
          <span className="icon-right-arrow text-2xl"></span>
        </button>
      </div>
    </section>
  );
};

export default MainSliderTwo;
