"use client";

import mainSliderTwoData from "@/data/mainSliderTwoData";
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

const MainSliderTwo = () => {
  return (
    <section className="main-slider tour-details-slider">
      <Swiper {...mainSlideOptions}>
        {mainSliderTwoData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SingleSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Botões de navegação */}
      <div className="main-slider-nav">
        <div id="main-slider__swiper-button-prev" className="main-slider-button-prev">
          <span className="icon-right-arrow"></span>
        </div>
        <div id="main-slider__swiper-button-next" className="main-slider-button-next">
          <span className="icon-right-arrow"></span>
        </div>
      </div>
    </section>
  );
};

export default MainSliderTwo;
