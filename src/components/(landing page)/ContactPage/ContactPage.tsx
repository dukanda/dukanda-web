"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactPage from "@/data/contactPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { tagline, title, socials } = contactPage;

const inputs = ["name", "email", "message"];

const ContactPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    //@ts-ignore
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };

  return (
    <section className="contact-page">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <div className="contact-page__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <div className="contact-page__social">
                {socials.map(({ id, icon, href }) => (
                  <a href={href} key={id}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="w-full h-[67px]  px-4 text-gray-700 text-sm font-medium rounded-md outline-none border-none"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Endereço de email"
                  required
                  className="w-full h-[67px] px-4 text-gray-700 text-sm font-medium rounded-md outline-none border-none"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Escrava o seu comentário"
                required
                className="w-full h-[190px] px-6 py-4 text-gray-700 text-sm font-medium rounded-md outline-none border-none"
              />
              <button
                type="submit"
                className="relative inline-block px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-orange-500 rounded-lg transition-all duration-300 hover:bg-green-800"
              >
               Contacte-nos
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
