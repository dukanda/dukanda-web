import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import clsx from "clsx";

const SingleNewsOne = ({ news, newsTwo }: { news: News; newsTwo?: boolean }) => {
  const { title, coverImageUrl, description, publishedByName, publishedAt } = news;

  return (
    <div
      className={clsx("relative block mt-10 xl:mt-0 mb-[26px]", newsTwo && "animate-fadeInUp")}
      style={{ userSelect: newsTwo ? "none" : "unset" }}
    >
      <div className="relative block overflow-hidden rounded-[8px] group">
        <Image
          src={coverImageUrl}
          alt={title}
          className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 rounded-[8px]"
        />
        <Link href={`/news/detalhe/${news.id}`} legacyBehavior>
          <a className="absolute inset-0 flex items-center justify-center text-[30px] text-white bg-black/40 transition-all duration-500 opacity-0 invisible transform -translate-y-1/3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 rounded-[8px]">
            <span className="relative block w-[20px] h-[20px] before:content-[''] before:absolute before:w-[20px] before:h-[2px] before:bg-white before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:w-[2px] after:h-[20px] after:bg-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 group-hover:before:bg-orange-500 group-hover:after:bg-orange-500" />
          </a>
        </Link>
      </div>

      <div className="relative block mt-[21px]">
        <h3
            className="text-[22px] font-bold leading-[30px] mt-2  h-[90px] overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3, // Limita o texto a 3 linhas
            WebkitBoxOrient: "vertical",
          }}
        >
          <Link href={`/news/detalhe/${news.id}`} legacyBehavior>
            <a className="text-black hover:text-orange-500 transition-all duration-500">
              {title}
            </a>
          </Link>
        </h3>
        <p className="text-sm text-gray-500 mt-2 h-[60px] overflow-hidden text-ellipsis">
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </p>
        <ul className="flex items-center m-0 p-0 list-none mt-2">
          <li>
            <span className="text-sm text-gray-500">
              <i className="far fa-user-circle text-orange-500 pr-[4px]" />
              {publishedByName || "Autor desconhecido"}
            </span>
          </li>
          <li className="ml-[20px]">
            <span className="text-sm text-gray-500">
              <i className="far fa-calendar-alt text-orange-500 pr-[4px]" />
              {publishedAt ? new Date(publishedAt).toLocaleDateString() : "Data não disponível"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleNewsOne;