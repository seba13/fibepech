import { useCallback, useEffect, useState } from "react";
import type { MobileMenuProps } from "../types";

export const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  useEffect(() => {
    console.log({ menuItems });
  }, []);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onPresMenu = useCallback(() => {
    if (isOpenMenu) {
      document.body.classList.remove("menu-open");
      setIsOpenMenu(() => false);
    } else {
      document.body.classList.add("menu-open");
      setIsOpenMenu(() => true);
    }

    // setIsOpenMenu((prev) => !prev);
  }, [isOpenMenu]);

  return (
    <>
      <span
        className={`mobile-hamburger ${isOpenMenu ? "active" : ""}`}
        onClick={onPresMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div
        className={`mobile-menu-overlay ${isOpenMenu ? "active" : ""}`}
        onClick={onPresMenu}
      />
      <nav className={`mobile-menu ${isOpenMenu ? "active" : ""}`}></nav>
    </>
  );
};
