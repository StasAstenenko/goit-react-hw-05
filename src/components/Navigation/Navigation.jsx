import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={isActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={isActive}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
