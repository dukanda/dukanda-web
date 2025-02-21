import toursListPage from "@/data/toursListPage";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const { toursList } = toursListPage;

const ToursListRight = () => {
  return (
    <div className="tours-list__right">
      <div className="tours-list__inner">
        {toursList.map(
          ({ id, image, superb, title, rate, text, date, user, map ,guide,city  }) => (
            <div key={id} className="tours-list__single">
              <div className="tours-list__img">
                <Image
                  src={require(`@/assets/images/resources/${image}`).default.src}
                  alt=""
                />
                {/* <div className="tours-list__icon">
                  <Link href="/tours/12/details" legacyBehavior>
                    <a>
                      <i className="fa fa-heart"></i>
                    </a>
                  </Link>
                </div> */}
              </div>
              <div className="tours-list__content">
                {/* <div className="tours-list__stars">
                  <i className="fa fa-star"></i> {superb} 
                </div> */}


                <div className="w-full flex items-start gap-2 cursor-pointer mb-2">
                  <div className="size-8 bg-gray-500 rounded-full"></div>
                  <div className="flex flex-col items-start">
                    <span>
                      {guide ? guide : "Ango-Tour"}

                    </span>
                    {/* <div className="popular-tours__stars">
                      <i className="far fa-map"></i>
                      {city ? city : "Luanda"}
                    </div> */}
                  </div>
                </div>

                <h3 className="tours-list__title">
                  <Link href="/tours/12/details" legacyBehavior>{title}</Link>
                </h3>
                <p className="tours-list__rate">
                  <span>{rate} kz</span> / Por pessoa
                </p>
                <p className="tours-list__text">{text}</p>
                {/* tours-list__meta list-unstyled */}
                <ul className=" bg-[#faf5ee] w-full flex justify-between rounded-md px-2 py-2.5 mb-2"> 
                  <li className="  flex text-sm items-center gap-1 ">
                    <Link href="/tours/12/details" legacyBehavior>
                      <a className="flex items-center gap-1">
                        <i className="far fa-calendar"></i>
                        {date}
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/tours/12/details" legacyBehavior>
                      <a>
                        <i className="far fa-user-circle"></i>
                        {user}
                      </a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/tours/12/details" legacyBehavior>
                      <a  className="  flex text-sm items-center gap-1 ">
                        <i className="far fa-map"></i>
                        {map}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ToursListRight;
