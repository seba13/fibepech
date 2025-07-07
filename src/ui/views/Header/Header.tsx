import { Navbar } from "../../components/Navbar/Navbar";
import { menuItems } from "../../constants/menuItems";
import { CarruselHeader } from "../../components/CarruselHeader/CarruselHeader";

export const Header = () => {
  return (
    <div className="header">
      <Navbar menuItems={menuItems} />
      <CarruselHeader />
    </div>
  );
};
