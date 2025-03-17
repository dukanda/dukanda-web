import { formatCurrency } from "@/_utils/formatCurrency";
import { destinationsDetailsRight } from "@/data/destinationsDetails";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const {
  title,
  lists,
  discount: { image, percent, title: discountTitle },
} = destinationsDetailsRight;

const DestinationsDetailsRight = () => {
  return (
    <div className="relative">
      {/* Última hora */}
      <div className=" shadow-sm border border-black rounded-md flex flex-col items-start p-4 ">
        <h3 className="text-xl font-bold mb-1 ml-3 ">{title}</h3>
        <ul className=" w-full flex flex-col items-start p-4 rounded-md">
          {lists.map(({ id, image, price, title, subtitle }, index) => (
            <Fragment key={id}>
              <li className="flex items-center space-x-4 w-full">
                <div className="w-20 h-20 flex-shrink-0 mb-2">
                  <Image
                    src={require(`@/assets/images/resources/${image}`).default.src}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h6 className="text-sm font-bold text-orange-500">{formatCurrency(Number(price))}</h6>
                  <h5 className="text-md font-semibold w-full">{title}</h5>
                  <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
              </li>
              {index < lists.length - 1 && <hr className="w-full my-2 border-gray-300" />}
            </Fragment>
          ))}
        </ul>
      </div>

      {/* Seção de desconto */}
      {/* <div className="relative mt-6">
        <Image src={image.src} alt="" className="w-full h-auto rounded-md" />
        <div className="absolute bottom-11 left-12 z-10 text-white">
          <h2 className="text-5xl font-light">{percent}</h2>
          <h4 className="text-2xl font-bold leading-7 mt-[-7px]">
            {discountTitle.split("\n").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span> <br />
              </Fragment>
            ))}
          </h4>
        </div>
      </div> */}
      {/* original */}
      <div className="destinations-details__discount">
        <Image src={image.src} alt="" />
        <div className="destinations-details__discount-content">
          <h2>{percent}</h2>
          <h4>
            {discountTitle.split("\n").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span> <br />
              </Fragment>
            ))}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailsRight;
