"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import context from "./context";

const ContextProvider = ({ children }:{children: React.ReactNode}) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const pathname = usePathname();

  const toggleMenu = (value: boolean) => {
    setMenuStatus((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
          ? value
          : !!value
    );
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };

  useEffect(() => {
    toggleMenu(false);
  }, [pathname]);

  const value = {
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
