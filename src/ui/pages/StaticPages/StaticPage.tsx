import { Navbar } from "../../components/Navbar/Navbar";
import { menuItems } from '../../constants/menuItems';
import { HomePage } from "../Home/Home";

export const StaticPage = () => {
  return (
    <div>
      <Navbar menuItems={menuItems}/>

      <h1>hola mundo</h1>

      <HomePage />
    </div>
  );
};
