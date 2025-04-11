"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import ToursListLeft from "./ToursListLeft";
import ToursListRight from "./ToursListRight";

const ToursListPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({});

  // Sincronizar filtros com a URL
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setFilters(params);
  }, [searchParams]);

  interface Filters {
    [key: string]: string;
  }

  const handleFilter = (newFilters: Filters): void => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    const queryString = new URLSearchParams({ ...filters, ...newFilters }).toString();
    router.push(`?${queryString}`);
  };

  const handleClearFilters = (): void => {
    setFilters({});
    router.push(`?`);
  };

  return (
    <section className="tours-list">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <ToursListLeft onFilter={handleFilter}
              //@ts-ignore
              onClearFilters={handleClearFilters} />
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