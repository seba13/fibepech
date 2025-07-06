import { useEffect } from "react";
import type { MobileMenuProps } from "../types";

export const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  useEffect(() => {
    console.log({ menuItems });
  }, []);

  return (
    <nav>
      <h1>menu mobile</h1>
    </nav>
  );
};
