 import { NavLink } from "react-router-dom";
import navbarItems from "./navbarData";

export default function NavLinks() {

    return (

        <ul className="navbar-links">

            {
                navbarItems.map((item) => (

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

                ))
            }

        </ul>

    );

}