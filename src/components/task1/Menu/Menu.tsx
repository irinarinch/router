import {NavLink} from "react-router-dom";

interface IActiveProps {
  isActive: boolean;
}

const Menu = () => {
  const active = ({isActive}: IActiveProps) => {
    return isActive ? "menu__item menu__item-active" : "menu__item";
  } 
  
  return (
    <nav className="menu">
      <NavLink className={active} to="/">Главная</NavLink>
      <NavLink className={active} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={active} to="/timeattack">Time Attack</NavLink>
      <NavLink className={active} to="/forza">Forza Karting</NavLink>
    </nav>
  );
};

export default Menu;
