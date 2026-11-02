

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* LOGO */}
        <Logo />

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
        >
          <FiMenu />
        </button>

        {/* NAVEGACIÓN */}
        <div
          className={`navbar-navigation ${
            menuOpen ? "navbar-navigation--open" : ""
          }`}
        >

          {/* ENLACES */}
          <div onClick={() => setMenuOpen(false)}>
            <NavLinks />
          </div>

          {/* LINKEDIN */}
          <div className="navbar-social">
            <a
              href="https://www.linkedin.com/in/jhonhoyosusbcali/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-linkedin"
              aria-label="Visitar perfil de LinkedIn"
              title="Visitar mi perfil de LinkedIn"
              onClick={() => setMenuOpen(false)}
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
