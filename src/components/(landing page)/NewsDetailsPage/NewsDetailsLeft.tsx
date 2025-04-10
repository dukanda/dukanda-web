import newsDetailsPage from "@/data/newsDetailsPage";
import React from "react";
import { Image } from "react-bootstrap";
// import AuthorOne from "./AuthorOne";
// import CommentForm from "./CommentForm";
// import CommentOne from "./CommentOne";
import Link from "next/link";

const {
  image,
  date,
  // author,
  totalComments,
  // title,
  // texts,
  // tags,
  socials,
  // authorData,
  // comments,
} = newsDetailsPage;

interface INewsDetailsProps {
  title?: string;
  description?: string;
  coverImageUrl?: string;
  publishedAt?: string | null;
  publishedByName?: string | null;
  content?: string;
  tags?: string[];
}

const NewsDetailsLeft = ({ title, description, coverImageUrl, publishedAt, publishedByName, content, tags }: INewsDetailsProps) => {
  return (
    <div className="relative block px-4 sm:px-6 lg:px-8">
      <div className="relative block">
        <div className="relative block mb-[19px]">
          <Image src={coverImageUrl || image.src} alt={title} className="w-full rounded-[var(--thm-border-radius)]" />
          {/* <div className="news-one__date">
            <p>
              {date.split(" ").map((t, i) => (
                <Fragment key={i}>
                  <span>{t}</span>
                  <br />
                </Fragment>
              ))}
            </p>
          </div> */}
        </div>
        <div>
          <ul className="list-none flex flex-col sm:flex-row gap-4 sm:gap-6">
            <li>
              <Link href="/news-details" legacyBehavior>
                <a className="flex items-center gap-1 text-orange-500 text-[13px] font-bold leading-[30px] transition-all duration-500 hover:text-[var(--thm-primary)]">
                  <i className="far fa-comments"></i>
                  {totalComments} Comentários
                </a>
              </Link>
            </li>

            <li className="flex items-center gap-1 text-[13px] font-bold leading-[30px] text-[var(--thm-black)]">
              Publicado: {" "}
              {
                publishedAt && (
                  <span className="text-[13px] flex items-center justify-center gap-2 font-bold leading-[30px] text-[var(--thm-black)]">
                    <i className="far fa-calendar-alt"></i>
                    
                    {new Date(publishedAt).toLocaleDateString()}
                  </span>
                )
              }
            </li>
          </ul>
          <h3 className="text-[24px] sm:text-[30px] font-bold leading-[32px] mt-6 sm:mt-10 mb-[23px]">{title}</h3>
          <div className="space-y-4 text-[14px] sm:text-[16px]">
            {description && <p>{description}</p>}
            {content &&
              content.split("\n").map((paragraph, index) => (
                <p key={index} className="mt-4">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between border-t border-[#ebe6de] py-[20px] sm:py-[35px] mt-[30px] sm:mt-[48px]">
          <p className="flex items-center flex-wrap gap-2">
            <span className="text-[16px] sm:text-[20px] font-bold tracking-[var(--thm-letter-spacing)] mr-[15px]">
              Tags:
            </span>
            {tags?.map((tag, i) => (
              <a
                key={i}
                href="#"
                className="text-[10px] sm:text-[11px] hover:text-orange-500 font-bold uppercase tracking-[0.1em] px-[10px] sm:px-[15px] bg-[var(--thm-primary)] text-[var(--thm-base)] rounded-[var(--thm-border-radius)] leading-[30px] inline-block transition-all duration-500 hover:bg-[var(--thm-black)] ml-[5px]:first"
              >
                {tag}
              </a>
            ))}
          </p>
          <div className="flex items-center mt-4 sm:mt-2 md:mt-0">
            {socials.map(({ id, icon, href }) => (
              <a
                href={href}
                key={id}
                className="relative ml-2 flex items-center justify-center text-center hover:text-orange-500 text-[var(--thm-black)] bg-[#faf5ee] rounded-full text-[14px] sm:text-[15px] h-[40px] sm:h-[50px] w-[40px] sm:w-[50px] transition-all duration-500 hover:text-[var(--thm-base)] hover:rotate-[360deg] ml-[10px]:first"
              >
                <i className={icon}></i>
                <span className="absolute top-0 left-0 right-0 bottom-0 content-[''] bg-[var(--thm-primary)] rounded-full scale-0 origin-center transform-gpu transition-[transform] duration-[400ms] ease-[cubic-bezier(0.62,0.21,0.45,1.52)] -z-10 hover:scale-100"></span>
              </a>
            ))}
          </div>
        </div>
        {/* <AuthorOne author={authorData} />
        <CommentOne comments={comments} />
        <CommentForm /> */}
      </div>
    </div>
  );
};

export default NewsDetailsLeft;
