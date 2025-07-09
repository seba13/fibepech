// import { Link, NavLink } from "react-router";
import { Contact } from "../../Contact/Contact";
import type { DesktopMenuProps } from "../types";
import { SocialMedia } from "../../SocialMedia/SocialMedia";
import { useEffect, useState } from "react";

// DesktopMenu.tsx
export const DesktopMenu = ({ menuItems }: DesktopMenuProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector(".desktop-menu");
      if (nav) {
        // Calcula la altura real del navbar
        const height = (nav as HTMLElement).offsetHeight;

        // Actualiza ambas variables
        document.documentElement.style.setProperty(
          "--nav-height",
          `${height}px`
        );

        // Si quieres diferente altura al hacer scroll
        const scrolledHeight = height * 0.8; // 80% del tamaño original
        document.documentElement.style.setProperty(
          "--nav-height-scrolled",
          `${scrolledHeight}px`
        );
      }
    };

    // Ejecutar al montar y cuando cambie el estado de scroll
    updateNavHeight();

    // También en redimensionamiento
    window.addEventListener("resize", updateNavHeight);

    return () => window.removeEventListener("resize", updateNavHeight);
  }, [scrolled]); // Dependencia del estado de scroll


  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <nav className={`desktop-menu  ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="left-nav">
            <a href="#">
              <img
                src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//logo_1024.webp"
                alt="logo"
                width="100"
                className="nav-logo"
              />
            </a>
          </div>

          <ul className="menu-items-container">
            {menuItems.map((item) => (
              <li key={item.id} className="menu-item">
                <a href={item.to} className="nav-link">
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="right-nav col-gap-1">
            <SocialMedia />
            <Contact />
          </div>
        </div>
      </nav>

      {/* Espacio compensatorio */}
      <div className="nav-placeholder"></div>
    </>
  );
};
