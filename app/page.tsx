import React from "react";
import Image from "next/image";
import NavLink from "./shared/componenets/NavLink";
import Carrousel from "./shared/componenets/Carrousel";
import AboutUs from "./componenets/home_componenets/AboutUs";
import Services from "./componenets/home_componenets/services";
import ContactUs from "./componenets/home_componenets/ContactUs";

export default function Home() {
  const Navlinks = [
    { title: "Home", path: "/" },
    { title: "About_Us", path: "/#aboutUs" },
    { title: "Services", path: "/#services" },
    { title: "Contact_Us", path: "/#contactUs" },
    { title: "Login", path: "/login" },
  ];

  return (
    <div>
      <nav className="navbar">
        <div>
          <a href="/">
            <Image
              src="/logo_gennyconnect.png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
        </div>

        <ul className="NavLinks_container">
          {Navlinks.map((navLink) => (
            <NavLink
              key={navLink.title}
              title={navLink.title}
              path={navLink.path}
            />
          ))}
        </ul>
      </nav>
      <main>
        <Carrousel />
        <AboutUs id="aboutUs" />
        <Services id="services" />
        <ContactUs id="contactUs" />
      </main>
    </div>
  );
}
