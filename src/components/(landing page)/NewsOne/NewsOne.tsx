"use client";
import newsOne from "@/data/newsOne";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "./SingleNewsOne";
import { useQuery } from "@tanstack/react-query";
import { newsRoutes } from "@/api/routes/News/index.routes";

const { tagline, title } = newsOne;

const NewsOne = () => {
  const { data: newsData, isLoading, isError } = useQuery({
    queryKey: ["newsData"],
    queryFn: async () => await newsRoutes.getNews(),
  });

  return (
    <section className="news-one">
      <Container>
        <div className="news-one__top">
          <Row>
            <Col xl={9} lg={9}>
              <div className="news-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3}>
              <div className="news-one__top-right">
                <Link href="/news" legacyBehavior>
                  <a className="news-one__btn thm-btn">Ver todas</a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="news-one__bottom">
          <Row>
            {newsData?.slice(0, 3).map((news) => (
              <Col xl={4} lg={4} key={news.id} className="animated fadeInUp">
                <SingleNewsOne news={news} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NewsOne;
