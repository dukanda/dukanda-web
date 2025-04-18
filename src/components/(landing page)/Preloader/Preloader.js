// import loader from "@/images/loader.png";
import loade from "@/assets/images/loader.png";
import React from "react";
// import { Image } from "react-bootstrap";
import Image from "next/image";

const Preloader = ({ loading }) => {
  return (
    <div
      style={{ opacity: loading ? 1 : 0, zIndex: loading ? 9999 : -1 }}
      className="preloader"
    >
      <Image
        className="preloader__image h-10 w-28"
        width={100}
        height={100}
        alt=""
        src={"/duk.png"}
        // src={loade}
      />
    </div>
  );
};

export default Preloader;
