// import logo from "@/images/resources/logo-1.png";
// import logo2 from "@/images/resources/logo-2.png";

import logo from "@/assets/images/resources/logo-1.png";
import logo2 from "@/assets/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Início",
    href: "/",
    subNavItems: [
      {
        id: 1,
        name: "Página Inicial",
        href: "/",
      }
    ],
  },
  {
    id: 2,
    name: "Destinos",
    href: "/destinations",
    subNavItems: [
      { id: 1, name: "Destinos", href: "/destinations" },
      // { id: 2, name: "Detalhes de Destino", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Passeios",
    href: "/tours/list",
    subNavItems: [
      // { id: 1, name: "Passeios", href: "/tours" },
      { id: 1, name: "Ver Passeios", href: "/tours/list" },
      // { id: 3, name: "Detalhes do Passeio", href: "/tour-details" },
    ],
  },
  {
    id: 4,
    name: "Páginas",
    href: "",
    subNavItems: [{ id: 1, name: "Sobre", href: "/about" }],
  },
  {
    id: 5,
    name: "Notícias",
    href: "/news",
    subNavItems: [
      { id: 1, name: "Notícias", href: "/news" },
      { id: 2, name: "Detalhes da Notícia", href: "/news/details" },
    ],
  },
  {
    id: 6,
    name: "Contato",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+244 944 475 132",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "hello@dukanda.tours",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
