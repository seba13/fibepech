import { CarouselHeader } from "../../components/CarruselHeader/CarouselHeader";
import { Navbar } from "../../components/Navbar/Navbar";
import { menuItems } from "../../constants/menuItems";

export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="header">
      {children}
      <Navbar menuItems={menuItems} />
      <CarouselHeader />
    </div>
  );
};
