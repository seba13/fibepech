import { useCallback, useEffect, useState, useRef } from "react";
import type { MobileMenuProps } from "../types";

export const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navListContainerRef = useRef<HTMLDivElement>(null);

  // Actualiza la variable CSS con la altura del menú
  const updateMenuHeight = useCallback(() => {
    if (navListContainerRef.current) {
      const scrollHeight = navListContainerRef.current.scrollHeight;
      navListContainerRef.current.style.setProperty(
        "--nav-list-height",
        `${scrollHeight}px`
      );
    }
  }, []);

  // Efecto para actualizar la altura cuando:
  // - El menú se abre/cierra
  // - Los items del menú cambian
  // - La ventana se redimensiona
  useEffect(() => {
    updateMenuHeight();

    const handleResize = () => {
      updateMenuHeight();
      // También actualizamos la altura del navbar como en tu código original
      const nav = document.querySelector(".mobile-menu");
      if (nav) {
        const height = (nav as HTMLElement).offsetHeight;
        document.documentElement.style.setProperty(
          "--nav-height",
          `${height}px`
        );
        const scrolledHeight = height * 0.8;
        document.documentElement.style.setProperty(
          "--nav-height-scrolled",
          `${scrolledHeight}px`
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpenMenu, menuItems, updateMenuHeight]);

  // Efecto original para el navbar scroll
  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector(".mobile-menu");
      if (nav) {
        const height = (nav as HTMLElement).offsetHeight;
        document.documentElement.style.setProperty(
          "--nav-height",
          `${height}px`
        );
        const scrolledHeight = height * 0.8;
        document.documentElement.style.setProperty(
          "--nav-height-scrolled",
          `${scrolledHeight}px`
        );
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, [scrolled]);

  // Efecto original para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <div
          ref={navListContainerRef}
          className={`nav-list-container ${isOpenMenu ? "active" : ""}`}
        >
          <ul className={`nav-list ${isOpenMenu ? "active" : ""}`}>
            {menuItems.map((item) => (
              <li key={item.id} className="menu-item">
                <a
                  href={item.to}
                  className="nav-link"
                  style={{ fontWeight: 900, width: "100%" }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav-placeholder"></div>
    </>
  );
};
