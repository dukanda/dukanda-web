"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { newsRoutes } from "@/api/routes/News/index.routes";
import SingleNewsOne from "../NewsOne/SingleNewsOne";
import { Container, Row, Col } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Skeleton } from "@/components/ui/skeleton";

const NewsTwo = () => {
  const { data: newsData, isLoading, isError } = useQuery({
    queryKey: ["newsData"],
    queryFn: async () => await newsRoutes.getNews(),
  });

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 576px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  if (isLoading) {
    return (
      <section className="news-two">
        <Container>
          <Row>
            <Col xl={4}>
              <div className="relative block mr-[70px]">
                <div className="section-title text-left">
                  <Skeleton className="h-[20px] w-[150px]" />
                  <Skeleton className="h-[30px] w-[200px] mt-2" />
                </div>
                <Skeleton className="h-[60px] mt-4" />
              </div>
            </Col>
            <Col xl={8}>
              <div className="keen-slider">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="keen-slider__slide">
                    <div className="relative block mt-10 xl:mt-0 mb-[26px]">
                      <Skeleton className="h-[200px] rounded-[8px]" />
                      <div className="relative block mt-[21px]">
                        <Skeleton className="h-[30px] mb-2" />
                        <Skeleton className="h-[20px]" />
                        <Skeleton className="h-[20px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (isError) return <p>Erro ao carregar as notícias.</p>;

  return (
    <section className="news-two">
      <Container>
        <Row>
          <Col xl={4}>
            <div className="relative block mr-[70px]">
              <div className="section-title text-left">
                <span className="section-title__tagline">Últimas Notícias</span>
                <h2 className="section-title__title">Destaques Recentes</h2>
              </div>
              <p className="news-two__text">
                Confira as últimas notícias e artigos selecionados para você.
              </p>
              <div className="flex gap-2 mt-4">
                <button
                  className="tns-prev bg-orange-500 text-white px-3 py-1 rounded"
                  onClick={() => instanceRef.current?.prev()}
                >
                  ‹
                </button>
                <button
                  className="tns-next bg-orange-500 text-white px-3 py-1 rounded"
                  onClick={() => instanceRef.current?.next()}
                >
                  ›
                </button>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <div ref={sliderRef} className="keen-slider">
              {newsData?.map((news) => (
                <div key={news.id} className="keen-slider__slide">
                  <SingleNewsOne news={news} newsTwo />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsTwo;
