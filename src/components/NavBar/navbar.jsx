 import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavbarButton from "./NavbarButton";

import "./Navbar.css";

export default function Navbar() {

    return (

        <header className="navbar">

            <div className="container navbar-container">

                <Logo />

                <NavLinks />

                <div className="navbar-buttons">

                    <NavbarButton>

                        Descargar CV

                    </NavbarButton>

                    <NavbarButton primary>

                        Contáctame

                    </NavbarButton>

                </div>

            </div>

        </header>

    );

}