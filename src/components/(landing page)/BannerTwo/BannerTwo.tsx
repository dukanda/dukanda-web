/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import TourSearchForm from '../TourSearchForm/TourSearchForm';

const bannerItems = [
  {
    image: '/banner3.jpg',
    title: 'Descubra',
    subTitle: 'Explore sua próxima aventura',
    bottomText: 'Reserve agora!',
  },
  {
    image: '/banner5.jpg',
    title: 'Explore Angola',
    subTitle: ' Descubra o desconhecido!',
    bottomText: 'Aventure-se em novas experiências',
  },
  {
    image: '/banner2.jpg',
    title: 'Viva a experiência',
    subTitle: 'Crie memórias inesquecíveis',
    bottomText: 'Comece a sua jornada hoje!',
  },
];

export default function BannerTwo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden mt-[90px] md:mt-0 pt-[150px] md:pt-0">
      {bannerItems.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="banner-bg-slide-overly"></div>
        </div>
      ))}

      <div className="relative z-20 flex flex-col justify-center items-center text-white h-full ">
        <p className="banner-two__sub-title">
          {bannerItems[index].title}
        </p>

        <h2 className=" text-[30px] text-white  sm:text-[40px] md:text-[60px] font-semibold leading-[50px] tracking-[-1px] text-center mb-10">
          {bannerItems[index].subTitle}
        </h2>
        <div className="tour-search-box mx-2">
          <TourSearchForm />
          <p className="banner-two__bottom-text hidden md:block">
            {bannerItems[index].bottomText}
          </p>
        </div>
      </div>
    </section>
  );
}
