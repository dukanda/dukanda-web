"use client";
import headerData from "@/data/headerData";
import Link from "next/link";
import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import { useRootContext } from "../context/context";

const { social, logo, navItems } = headerData;

const MobileMenu = () => {
  //@ts-ignore
  const { toggleMenu, menuStatus } = useRootContext();

  // Fechar o menu ao pressionar a tecla "Esc"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuStatus) {
        toggleMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuStatus, toggleMenu]);

  return (
    <div className={`mobile-nav__wrapper${menuStatus ? " expanded" : ""}`}>
      {/* Overlay para fechar o menu */}
      <div onClick={() => toggleMenu()} className="mobile-nav__overlay"></div>

      {/* Conteúdo do menu */}
      <div className="mobile-nav__content">
        {/* Botão de fechar */}
        <span onClick={() => toggleMenu()} className="mobile-nav__close">
          <i className="fa fa-times"></i>
        </span>

        {/* Logo */}
        <div className="logo-box">
          <Link href="/" legacyBehavior>
            <a aria-label="logo image" onClick={toggleMenu}>
              <Image src={logo.src} width={160} alt="Logo" />
            </a>
          </Link>
        </div>

        {/* Lista de navegação */}
        <ul className="main-menu__list">
          {navItems.map(({ id, ...item }) => (
            <NavItem key={id} item={item} onClick={toggleMenu} />
          ))}
        </ul>

        {/* Contato */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:dukanda@gmail.com" className="text-gray-800">
              dukanda@gmail.com
            </a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:974821682">974821682</a>
          </li>
        </ul>

        {/* Social Media */}
        <div className="mobile-nav__social">
          {social.map(({ icon, link }, index) => (
            <a key={index} href={link} className={`fab ${icon}`}></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
