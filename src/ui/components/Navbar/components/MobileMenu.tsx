import { useCallback, useEffect, useState } from "react";
import type { MobileMenuProps } from "../types";
// import { useDeviceStyles } from "../../../../hooks/useDeviceStyles";

export const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  // const { paddingTop, paddingLeft } = useDeviceStyles();
  const [scrolled, setScrolled] = useState(false);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector(".mobile-menu");
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
  }, [scrolled]);

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

  const onPresMenu = useCallback(() => {
    setIsOpenMenu((prev) => !prev);
  }, []);

  return (
    <>
      <div
        className={`mobile-menu-overlay ${isOpenMenu ? "active" : ""}`}
        onClick={onPresMenu}
      />

      <nav className={`mobile-menu ${scrolled ? "scrolled" : ""}`}>
        <div className="left-nav">
          <a href="#">
            <img
              src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//logo_192x192.png"
              alt="logo"
              width="80"
              className="nav-logo"
            />
          </a>
        </div>

        <div className="right-nav">
          <span
            className={`mobile-hamburger ${isOpenMenu ? "active" : ""}`}
            onClick={onPresMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <ul className={`nav-list ${isOpenMenu ? "active" : ""}`}>
          {menuItems.map((item) => {
            return (
              <li key={item.id} className="menu-item">
                <a
                  href={item.to}
                  className="nav-link"
                  style={{ fontWeight: 900, color: "fff", width: "100%" }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="nav-placeholder"></div>
    </>
  );
};
