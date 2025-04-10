"use client";
import { sidebar } from "@/data/newsDetailsPage";
import React from "react";
import { Image } from "react-bootstrap";

const { categories, tags } = sidebar;

export const newsFicticios = {
  title: "Atualizações recentes",
  lists: [
    {
      id: 1,
      image: "td-img-1.jpg",
      price: "",
      title: "Angola aprova o comércio de diamantes",
      subtitle: "",
    },
    {
      id: 2,
      image: "td-img-2.jpg",
      price: "",
      title: "As agências de viagens estão em alta em todo o país",
      subtitle: "",
    },
    {
      id: 3,
      image: "td-img-3.jpg",
      price: "",
      title: "Angola aprova a entrada de turistas no país",
      subtitle: "",
    },
  ],
};

const {
  lists,
} = newsFicticios;

const Sidebar = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target as HTMLFormElement);
  //   console.log(formData.get("search"));
  // };

  return (
    <div className="md:mt-0 mt-[50px]">
      {/* Search */}
      {/* <div className="rounded-[var(--thm-border-radius)] mb-[30px] bg-[var(--thm-base)] border border-[#ebe6de] px-[49px] pt-[44px] pb-[49px]">
        <h3 className="text-[20px] font-bold text-[var(--thm-black)] tracking-[var(--thm-letter-spacing)] mb-[25px] text-white">
          Search
        </h3>
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="block w-full h-[78px] bg-[#faf5ee] rounded-[var(--thm-border-radius)] px-[30px] pr-[70px] text-[15px] font-medium text-[var(--thm-gray)] placeholder-[var(--thm-gray)] outline-none"
          />
          <button
            type="submit"
            className="absolute top-0 bottom-0 right-0 w-[70px] border-none outline-none bg-transparent text-[var(--thm-primary)] text-[20px] flex items-center justify-center"
          >
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div> */}

      {/* Recent Posts */}
      <div className=" shadow-sm border border-black rounded-md flex flex-col items-start p-4 mb-10 ">
        <h3 className="text-xl font-bold mb-1 ml-3 ">Notícias recentes</h3>
        <ul className=" w-full flex flex-col items-start p-4 rounded-md">
          {lists.map(({ id, image, price, title, subtitle }, index) => (
            <div key={id}>
              <li className="flex items-center space-x-4 w-full">
                <div className="w-20 h-20 flex-shrink-0 mb-2">
                  <Image
                    src={require(`@/assets/images/resources/${image}`).default.src}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h5 className="text-sm font-semibold w-full">{title}</h5>
                  <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
              </li>
              {index < lists.length - 1 && <hr className="w-full my-2 border-gray-300" />}
            </div>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className=" shadow-sm border border-black rounded-md flex flex-col items-start p-4 mb-10 ">
        <h3 className="text-xl font-bold mb-1 ml-3 ">Categorias</h3>
        <ul className=" w-full flex flex-col items-start p-4 rounded-md">
          {categories.map((category, index) => (
            <div key={index}>
              <li className="flex items-center space-x-4 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                  <h5 className="text-sm font-semibold w-full text-gray-500 mt-2">{category}</h5>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="rounded-[var(--thm-border-radius)] bg-[var(--thm-base)] border border-[#ebe6de] px-[45px] pt-[45px] pb-[50px]">
        <h3 className="text-[20px] font-bold text-[var(--thm-black)] tracking-[var(--thm-letter-spacing)] mb-[15px] ml-[5px]">
          Tags
        </h3>
        <div className="flex flex-wrap ml-[5px] ">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="text-[11px] font-bold uppercase tracking-[0.1em] px-[15px] bg-[#faf5ee] text-[var(--thm-gray)] rounded-[var(--thm-border-radius)] leading-[30px] transition-all duration-400 hover:bg-[var(--thm-primary)] hover:text-[var(--thm-base)] mr-[5px] mt-[10px]"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
