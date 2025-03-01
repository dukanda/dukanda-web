import Header from "@/components/(landing page)/Header/Header";
import Preloader from "@/components/(landing page)/Preloader/Preloader";
import { useRootContext } from "@/components/(landing page)/context/context";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import MobileMenu from "../(landing page)/MobileMenu/MobileMenu";
import Search from "../(landing page)/Search/Search";
import SiteFooter from "../(landing page)/SiteFooter/SiteFooter";

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
