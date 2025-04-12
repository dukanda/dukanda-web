import { Input } from "@/components/ui/input";
import footerData from "@/data/footerData";
import { MoveUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { logo, icons, companies, explore, social, year, author, about } =
  footerData;

const SiteFooter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"));
  };

  return (
    <footer className="relative bg-green-800">
      <div className="relative">
        <Container>
          <div className="relative py-[127px] pb-[109px] z-[1]">
            <Row>
              <Col xl={4} lg={6} md={6} className="animate-fadeInUp">
                <div className="relative mr-[70px] -mt-[8px]">
                  <div>
                    <Link href="/" passHref>
                      <Image src={"/duk.png"} alt="Logo" />
                    </Link>
                  </div>
                  <p className="text-[15px] text-gray-400 leading-[32px] pt-[29px] pb-[24px] mb-[18px] border-b border-gray-700">
                    {about}
                  </p>
                  <ul className="list-none">
                    {icons.map(({ id, icon, content, subHref }) => (
                      <li key={id} className="flex items-center space-x-[20px] mt-2">
                        <div className="flex items-center">
                          <i className={`${icon} text-[15px] text-orange-500`} />
                        </div>
                        <div>
                          {subHref ? (
                            <a href={`${subHref}:${content}`} className="text-[15px] font-medium text-gray-400 hover:text-orange-500 transition">
                              {content}
                            </a>
                          ) : (
                            <p className="text-[15px] font-medium text-gray-400">{content}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animate-fadeInUp">
                <div className="relative">
                  <h3 className="text-[18px] font-bold text-white mb-[25px]">Companhias</h3>
                  <ul className=" ">
                    {companies.map(({ id, link, title }) => (
                      <li key={id} className="mt-[5px] w-full">
                        {link.includes("/") ? (
                          <Link href={link}>{title}</Link>
                        ) : (
                          <a href={link} target="_blank" rel="noreferrer" className="text-[15px] font-medium text-gray-400 hover:text-white transition">
                            {title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animate-fadeInUp">
                <div className="relative">
                  <h3 className="text-[18px] font-bold text-white mb-[25px]">Explorar</h3>
                  <ul className="list-none">
                    {explore.map(({ id, title, link }) => (
                      <li key={id} className="mt-[5px]">
                        <a href={link} className="text-[15px] font-medium text-gray-400 hover:text-white transition">
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={6} md={6} className="animate-fadeInUp">
                <div className="relative">
                  <h3 className="text-[18px] font-bold text-white mb-[25px]">Newsletter</h3>
                  <form onSubmit={handleSubmit} className="pt-[12px]">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="w-full h-[67px] bg-white border-none text-[13px] text-gray-800 font-medium capitalize text-start rounded-lg px-[30px]"
                      />
                      <button type="submit" className="w-full mt-[10px] py-[17px] text-[15px] font-bold uppercase bg-orange-500 text-white  rounded-lg transition hover:bg-orange-600">
                        Subscrever
                      </button>
                    </div>
                  </form>
                  <div className="flex mt-[12px]">
                    <div className="h-[18px] w-[18px] mt-2 border border-gray-400 rounded-full flex items-center justify-center">
                      <i className="fa fa-check text-[8px] text-gray-400" />
                    </div>
                    <p className="ml-[10px] text-[15px] text-gray-400 font-medium">
                      Concordo com todos termos e Políticas
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="relative flex items-center justify-between bg-white rounded-tl-[10px] py-[20px] px-[160px] z-[1]">
        <div className="flex items-center gap-2">
          {social.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="flex items-center justify-center text-center text-black bg-gray-200 rounded-full text-[15px] h-[50px] w-[50px] transition hover:text-white hover:bg-orange-text-orange-500"
            >
              <i className={`fab ${icon}`} />
            </a>
          ))}
        </div>
        <p className="text-[15px] text-gray-500 font-medium">
          &copy; {year} - <a href="#" className="hover:text-orange-500 transition">{author}</a>
        </p>
        <div className="absolute top-0 bottom-0 left-0">
          <a href="#" className="absolute top-0 bottom-0 left-0 w-[122px] flex items-center justify-center bg-orange-500 rounded-tl-[8px] transition hover:bg-orange-700 hover:text-white">
            <span className=" text-white">
              <MoveUp size={20} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
