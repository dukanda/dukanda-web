"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToursListLeft from "./ToursListLeft";
import ToursListRight from "./ToursListRight";

const ToursListPage = () => {
  //@ts-ignore
  const [filters, setFilters] = useState({});

  //@ts-ignore
  const handleFilter = (filters) => {
    //@ts-ignore
    setFilters(filters);
  };

  return (
    <section className="tours-list">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <ToursListLeft onFilter={handleFilter} />
          </Col>
          <Col xl={8} lg={7}>
            <ToursListRight filters={filters} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ToursListPage;