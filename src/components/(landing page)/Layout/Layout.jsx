"use client";
// import "node_modules/swiper/swiper-bundle.min.css";
// import "swiper/swiper-bundle.min.css";
// import "/workspaces/dukanda-web/node_modules/swiper/swiper-bundle.min.css";
import "@/styles/swiper-bundle.min.css";

import "tiny-slider/dist/tiny-slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/animate/custom-animate.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "@/assets/vendors/tevily-icons/style.css";
import "@/assets/vendors/reey-font/stylesheet.css";
import "react-datepicker/dist/react-datepicker.css";

// extra css
import "@/styles/globals.css";
import "@/styles/tevily.css";
import "@/styles/tevily-responsive.css";

import Header from "@/components/(landing page)/Header/Header";
import Preloader from "@/components/(landing page)/Preloader/Preloader";
import { useRootContext } from "@/components/(landing page)/context/context";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import SiteFooter from "../SiteFooter/SiteFooter";
import { Sheets } from "@/components/menu-sheet";

const Layout = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);
  const { menuStatus } = useRootContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle} - Dukanda, Descubra os Melhores Destinos, Passeios e Agências de Turismo&quot;</title>
        <link rel="shortcut icon" href={"/favicon.ico"} type="image/x-icon" />
      </Head>
      <Preloader loading={loading} />
      <main style={{ opacity: loading ? 0 : 1 }} className="page-wrapper">
        <Header pageTitle={pageTitle} />
        <div className=" md:mt-28">
          {children}
        </div>
        <SiteFooter />
      </main>
      <Search />
    </>
  );
};

export default Layout;
