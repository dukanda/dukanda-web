"use client";
// import "node_modules/swiper/swiper-bundle.min.css";
import "/workspaces/dukanda-web/node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/animate/custom-animate.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "@/assets/vendors/tevily-icons/style.css";
import "@/assets/vendors/reey-font/stylesheet.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-rangeslider/lib/index.css";

// extra css
import "@/styles/globals.css";
import "@/styles/tevily.css";
import "@/styles/tevily-responsive.css";

import Header from "@/components/(landing page)/Header/Header";
import Preloader from "@/components/(landing page)/Preloader/Preloader";
import { useRootContext } from "@/components/(landing page)/context/context";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Search from "../Search/Search";
import SiteFooter from "../SiteFooter/SiteFooter";

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
      </Head>
      <Preloader loading={loading} />
      <main style={{ opacity: loading ? 0 : 1 }} className="page-wrapper">
        <Header pageTitle={pageTitle} />
        {children}
        <SiteFooter />
      </main>
      {menuStatus && <MobileMenu />}
      <Search />
    </>
  );
};

export default Layout;
