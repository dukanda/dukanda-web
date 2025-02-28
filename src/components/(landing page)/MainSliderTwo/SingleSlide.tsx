import React from "react";
import Image from "next/image";

const SingleSlide = ({ coverImageUrl }: { coverImageUrl: string }) => {
  return (
    <div className="relative w-full h-[80vh] md:h-[70vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src={coverImageUrl}
        alt="Slide Image"
        layout="fill"
        // objectFit="cover"
        quality={90}
        className="absolute object-cover inset-0 transition-transform duration-[7000ms] scale-100 swiper-slide-active:scale-110"
        priority
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Conteúdo */}
      <div className="relative text-center text-white z-10">
        <h2 className="text-[40px] md:text-[60px] lg:text-[70px] leading-tight font-light text-[var(--thm-primary)] opacity-0 translate-y-[-30px] transition duration-[2000ms] delay-1000 swiper-slide-active:opacity-100 swiper-slide-active:translate-y-0">
          Título do Slide
        </h2>
        <p className="text-[20px] md:text-[30px] lg:text-[40px] font-medium text-[var(--thm-base)] opacity-0 translate-y-[30px] transition duration-[2000ms] swiper-slide-active:opacity-100 swiper-slide-active:translate-y-0">
          Descrição do Slide
        </p>
      </div>
    </div>
  );
};

export default SingleSlide;
