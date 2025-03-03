
// import { useRootContext } from "@/components/(landing page)/context/context";
// import headerData from "@/data/headerData";
// import useScroll from "@/hooks/useScroll";
// import Link from "next/link";
// import React from "react";
// import { Container, Image } from "react-bootstrap";
// import NavItem from "./NavItem";

// const { icons, navItems, social, logo, logo2 } = headerData;

// const Header = ({ pageTitle }) => {
//   const scrollTop = useScroll(130);
//   //Mario
//   const { toggleMenu, toggleSearch } = useRootContext();

//   return (
//     <header
//       className={`main-header${pageTitle === "Home Two" ? " main-header-two" : ""
//         } clearfix`}
//     >
//       <div className="main-header__top">
//         {/* <Container>
//           <div className="main-header__top-inner clearfix">
//             <div className="main-header__top-left">
//               <ul className="list-unstyled main-header__top-address">
//                 {icons.map(({ id, icon, content, subHref }) => (
//                   <li key={id}>
//                     <div className="icon">
//                       <span className={icon}></span>
//                     </div>
//                     <div className="text">
//                       <a href={`${subHref}:${content}`}>{content}</a>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="main-header__top-right">
//               <div className="main-header__top-right-inner">
//                 <div className="main-header__top-right-social">
//                   {social.map(({ icon, link }, index) => (
//                     <a href={link} key={index}>
//                       <i className={`fab ${icon}`}></i>
//                     </a>
//                   ))}
//                 </div>
//                 <div className="main-header__top-right-btn-box">
//                   <a href="#" className="thm-btn main-header__top-right-btn">
//                   Seja um guia turístico
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container> */}
//       </div>
//       <nav
//         className={
//           scrollTop
//             ? `stricky-header stricked-menu main-menu${pageTitle === "Home Two" ? " main-menu-two" : ""
//             } stricky-fixed slideInDown animated clearfix`
//             : `main-menu${pageTitle === "Home Two" ? " main-menu-two" : ""
//             } slideIn animated clearfix`
//         }
//       >
//         <div
//           className={
//             scrollTop
//               ? "sticky-header__content main-menu-wrapper clearfix"
//               : "main-menu-wrapper clearfix"
//           }
//         >
//           <Container className="clearfix">
//             <div className="main-menu-wrapper-inner clearfix">
//               <div className="main-menu-wrapper__left clearfix">
//                 <div className="main-menu-wrapper__logo">
//                   <Link href="/" legacyBehavior>
//                     <a>
//                       <Image
//                         src={pageTitle === "Home Two" ? logo2.src : logo.src}
//                         alt=""
//                       />
//                     </a>
//                   </Link>
//                 </div>
//                 {/*  Mario Comment */} 
//                 <div className="main-menu-wrapper__main-menu">
//                   <span
//                     onClick={() => toggleMenu()}
//                     className="mobile-nav__toggler"
//                   >
//                     <i className="fa fa-bars"></i>
//                   </span>
//                   <ul className="main-menu__list">
//                     {navItems.map((navItem) => (
//                       <NavItem key={navItem.id} navItem={navItem} />
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               {/* Mario Comment*/}
//                <div className="main-menu-wrapper__right">
//                 <span
//                   onClick={toggleSearch}
//                   style={{ cursor: "pointer" }}
//                   className="main-menu__search search-toggler icon-magnifying-glass"
//                 ></span>
//                 <a href="#" className="main-menu__user icon-avatar"></a>
//               </div> 
//             </div>
//           </Container>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



// Mario Comment
"use client";

import { useRootContext } from "@/components/(landing page)/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavItem from "./NavItem";
import { MenuIcon } from "lucide-react";

const { icons, navItems, social, logo, logo2 } = headerData;

const Header = ({ pageTitle}) => {
  const scrollTop = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (

    //main-header
    <header
      className={` w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrollTop ? "bg-[var(--thm-base)] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      {/* <div className="main-header__top hidden md:block bg-[var(--thm-black)] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
          <ul className="main-header__top-address flex space-x-6 text-sm">
            {icons.map(({ id, icon, content, subHref }) => (
              <li key={id} className="flex items-center space-x-2">
                <span className={`${icon} text-lg text-[var(--thm-primary)]`}></span>
                <a href={`${subHref}:${content}`} className="hover:text-[var(--thm-base)] transition">
                  {content}
                </a>
              </li>
            ))}
          </ul>
          <div className="main-header__top-right flex space-x-4 items-center">
            {social.map(({ icon, link }, index) => (
              <a key={index} href={link} className="text-lg text-[var(--thm-base)] hover:text-[var(--thm-primary)] transition">
                <i className={`fab ${icon}`}></i>
              </a>
            ))}
            <a
              href="#"
              className="main-header__top-right-btn bg-[var(--thm-primary)] text-[var(--thm-black)] px-6 py-2 rounded-md text-sm font-semibold hover:bg-[var(--thm-base)] transition"
            >
              Seja um guia turístico
            </a>
          </div>
        </div>
      </div> */}

      {/* Navigation */}
      <nav
        className={`main-menu w-full bg-white  transition-all duration-300 ${
          scrollTop ? "stricky-header stricky-fixed" : ""
        }`}
      >
         {/* main-menu-wrapper container */}
        <div className=" mx-auto flex justify-between items-center px-12">
          {/* Logo */}
          <Link href="/" className="main-menu-wrapper__logo flex items-center" passHref>
            <Image
              src={pageTitle === "Home Two" ? logo2.src : logo.src}
              alt="Logo"
              width={150}
              height={80}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <ul className="main-menu__list hidden md:flex space-x-6">
            {navItems.map((navItem) => (
              <NavItem key={navItem.id} navItem={navItem} />
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="main-menu__search text-[var(--thm-black)] hover:bg-[var(--thm-primary)] hover:text-[var(--thm-base)] transition w-12 h-12 flex items-center justify-center rounded-full bg-[#faf5ee] text-lg">
              <i className="icon-magnifying-glass"></i>
            </button>
            <a href="#" className="main-menu__user text-[var(--thm-black)] hover:bg-[var(--thm-primary)] hover:text-[var(--thm-base)] transition w-12 h-12 flex items-center justify-center rounded-full bg-[#faf5ee] text-lg">
              <i className="icon-avatar"></i>
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="block xl:hidden  text-[var(--thm-primary)] hover:text-[var(--thm-black)] transition text-lg"
            >
              <MenuIcon size={24}/>
              {/* <i className="fa fa-bars"></i> */}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
