import type { NavbarProps } from "./types";
import useDeviceDetect from "../../../hooks/useDeviceDetect";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";

export const Navbar = ({ menuItems }: NavbarProps) => {
  const { isMobile } = useDeviceDetect();

  return isMobile ? (
    <MobileMenu menuItems={menuItems} />
  ) : (
    <DesktopMenu menuItems={menuItems} />
  );
};
