"use client";

import { Input } from "@/components/ui/input";
import footerData from "@/data/footerData";
import { MoveUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { logo, icons, companies, explore, social, year, author, about } = footerData;

const SiteFooter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"));
  };

  return (
    <footer className="relative bg-green-800 text-white">
      <div className="relative">
        <Container>
          <div className="py-20 pb-24 relative z-[1]">
            <Row className="gap-y-10">
              <Col xl={4} lg={6} md={6} sm={12} className="animate-fadeInUp">
                <div className="mr-6">
                  <Link href="/" passHref>
                    <Image src={"/duk.png"} alt="Logo" />
                  </Link>
                  <p className="text-sm text-gray-400 leading-7 pt-7 pb-6 mb-5 border-b border-gray-700">
                    {about}
                  </p>

                </div>
              </Col>

              <Col xl={2} lg={3} md={6} sm={6} xs={12} className="animate-fadeInUp">
                <h3 className="text-lg font-bold mb-6 text-white">Companhias</h3>
                <ul>
                  {companies.map(({ id, link, title }) => (
                    <li key={id} className="mt-1">
                      {link.includes("/") ? (
                        <Link href={link}>{title}</Link>
                      ) : (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-gray-400 hover:text-white transition"
                        >
                          {title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>

              <Col xl={2} lg={3} md={6} sm={6} xs={12} className="animate-fadeInUp">
                <h3 className="text-lg font-bold mb-6 text-white">Explorar</h3>
                <ul className="list-none">
                  {explore.map(({ id, title, link }) => (
                    <li key={id} className="mt-1">
                      <a href={link} className="text-sm font-medium text-gray-400 hover:text-white transition">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
              <h3 className="text-lg font-bold mb-6 text-white">Localização</h3>
                <ul className="list-none">
                  {icons.map(({ id, icon, content, subHref }) => (
                    <li key={id} className="flex items-center gap-5 mt-2">
                      <i className={`${icon} text-sm text-orange-500`} />
                      {subHref ? (
                        <a href={`${subHref}:${content}`} className="text-sm font-medium text-gray-400 hover:text-orange-500 transition">
                          {content}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-400">{content}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>

              {/* 
              <Col xl={4} lg={6} md={6} sm={12} className="animate-fadeInUp">
                <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                <form onSubmit={handleSubmit} className="pt-3">
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="w-full h-16 bg-white border-none text-sm text-gray-800 font-medium rounded-lg px-6"
                  />
                  <button
                    type="submit"
                    className="w-full mt-3 py-4 text-sm font-bold uppercase bg-orange-500 text-white rounded-lg transition hover:bg-orange-600"
                  >
                    Subscrever
                  </button>
                </form>
                {/* <div className="flex mt-4 items-start">
                  <div className="h-[18px] w-[18px] mt-[6px] border border-gray-400 rounded-full flex items-center justify-center">
                    <i className="fa fa-check text-[8px] text-gray-400" />
                  </div>
                  <p className="ml-3 text-sm text-gray-400 font-medium">
                    Concordo com todos termos e Políticas
                  </p>
                </div> 
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>

      {/* Footer bottom */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between bg-white rounded-tl-xl py-5 px-10 lg:px-40 gap-y-4 z-[1]">
        <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start">
          {social.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="flex items-center justify-center bg-gray-200 rounded-full text-[15px] h-[50px] w-[50px] transition hover:text-white hover:bg-orange-500"
            >
              <i className={`fab ${icon}`} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500 font-medium text-center">
          &copy; {year} -{" "}
          <a href="#" className="hover:text-orange-500 transition">
            {author}
          </a>
        </p>

        <a
          href="#"
          className="absolute md:bottom-0 md:left-0 bottom-0 right-0 h-16 w-16 md:h-full md:w-28 flex items-center justify-center bg-orange-500 rounded-tl-lg transition hover:bg-orange-700 hover:text-white "
        >
          <MoveUp size={20} className="text-white" />
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;
