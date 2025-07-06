import { NavLink } from "react-router";
import type { DesktopMenuProps } from "../types";
import { Contact } from "../../Contact/Contact";

export const DesktopMenu = ({ menuItems }: DesktopMenuProps) => {
  return (
    <nav className="desktop-menu margin-web">
      <img
        src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//logo_1024.webp"
        alt="logo"
        width="100"
      />

      <ul className="menu-items-container">
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.to}>
                {() => {
                  return <span>{item.title}</span>;
                }}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Contact />
    </nav>
  );
};
