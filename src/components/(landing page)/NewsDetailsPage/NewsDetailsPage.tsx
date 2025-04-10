import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import Sidebar from "./Sidebar";

interface INewsDetailsPageProps {
  title?: string;
  description?: string;
  coverImageUrl?: string;
  publishedAt?: string | null;
  publishedByName?: string | null;
  content?: string;
  tags?: string[];
}


const NewsDetailsPage = ({ title, description, coverImageUrl, publishedAt, publishedByName, content, tags }: INewsDetailsPageProps) => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <NewsDetailsLeft
              title={title}
              description={description}
              coverImageUrl={coverImageUrl}
              content={content}
              publishedAt={publishedAt}
              publishedByName={publishedByName}
              tags={tags}
            />
          </Col>
          <Col xl={4} lg={5}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
