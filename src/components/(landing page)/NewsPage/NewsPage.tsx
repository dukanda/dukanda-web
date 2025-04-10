"use client";
import newsPage from "@/data/newsPage";
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
          {newsData?.map((news) => (  
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
