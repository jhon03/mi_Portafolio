
import { NavLink } from "react-router-dom";
import navbarItems from "./navbarData";

export default function NavLinks() {
  // Mostrar únicamente las secciones que ya están disponibles
  const visibleItems = navbarItems.filter((item) =>
    ["Inicio", "Formación"].includes(item.title)
  );

  return (
    <ul className="navbar-links">
      {visibleItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
