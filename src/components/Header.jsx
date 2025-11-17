// Header Component
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="pixel-text">DEV_MZ</span>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <a href="#home" className="nav-link pixel-text">
            HOME
          </a>
          <a href="#about" className="nav-link pixel-text">
            SOBRE
          </a>
          <a href="#projects" className="nav-link pixel-text">
            PROJECTOS
          </a>
          <a href="#skills" className="nav-link pixel-text">
            SKILLS
          </a>
          <a href="#contact" className="nav-link pixel-text">
            CONTACTO
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
