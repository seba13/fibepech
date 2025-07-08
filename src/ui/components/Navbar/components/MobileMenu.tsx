import { useCallback, useState } from "react";
import type { MobileMenuProps } from "../types";
import { useDeviceStyles } from "../../../../hooks/useDeviceStyles";

export const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const { paddingTop, paddingLeft } = useDeviceStyles();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onPresMenu = useCallback(() => {
    // if (isOpenMenu) {
    //   document.body.classList.remove("menu-open");
    //   setIsOpenMenu(() => false);
    // } else {
    //   document.body.classList.add("menu-open");
    //   setIsOpenMenu(() => true);
    // }

    setIsOpenMenu((prev) => !prev);
  }, []);

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
      <nav
        className={`mobile-menu ${
          isOpenMenu ? "active" : ""
        } ${paddingLeft} ${paddingTop}`}
      >
        <ul className="menu-items-container flex flex-col row-gap-0-5">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <a
                href={item.to}
                className="nav-link"
                style={{ fontWeight: 900 }}
              >
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
