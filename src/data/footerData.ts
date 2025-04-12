// import logo from "@/images/resources/footer-logo.png";
import logo from "@/assets/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Dukanda",
  about:
    " Bem-vindo à nossa plataforma de viagens! .",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+244 944 475 132",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "dukanda@gmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "666 Nova vida, Kilamba Kiaxi, Luanda, Angola",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "Sobre nós" },
    { id: 2, link: "#", title: " Blog da comunidade" },
    { id: 3, link: "#", title: " Rewards" },
    { id: 4, link: "#", title: "Trabalhe connosco" },
    // { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "Conta" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contacto" },
    // { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Políticas de Privacidades" },
  ],
};

export default footerData;
