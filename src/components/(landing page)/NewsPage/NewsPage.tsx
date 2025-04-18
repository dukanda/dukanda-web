"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "../NewsOne/SingleNewsOne";
import { useQuery } from "@tanstack/react-query";
import { newsRoutes } from "@/api/routes/News/index.routes";

const NewsPage = () => {
  const { data: newsData, isLoading, isError } = useQuery({
    queryKey: ["newsData"],
    queryFn: async () => await newsRoutes.getNews(),
  });

  return (
    <section className="news-one">
      <Container>
        <Row>
          {isLoading && (
            <>
              {[...Array(3)].map((_, index) => (
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  key={index}
                  className="animated fadeInUp m-2"
                >
                  <div className="skeleton h-[300px] w-full bg-gray-200 rounded-[8px]" />
                </Col>
              ))}
            </>
          )}
          {!isLoading && newsData?.length === 0 && (
            <Col>
              <p className="text-center text-gray-500">
                Nenhuma notícia disponível no momento.
              </p>
            </Col>
          )}
          {!isLoading &&
            newsData?.map((news) => (
              <Col
                xl={4}
                lg={6}
                md={6}
                key={news.id}
                className="animated fadeInUp"
              >
                <SingleNewsOne news={news} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
