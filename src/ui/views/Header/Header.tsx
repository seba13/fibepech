import { CarouselHeader } from "../../components/CarruselHeader/CarouselHeader";
import { Navbar } from "../../components/Navbar/Navbar";
import { menuItems } from "../../constants/menuItems";

export const Header = () => {
  return (
    <div className="header">
      <Navbar menuItems={menuItems} />
      <CarouselHeader />
    </div>
  );
};
