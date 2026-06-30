import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="container">

        <div className="logo">
          Sowndarya
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Live Projects</a></li>
          <li><a href="#contact">Contact</a></li>

          <li>
            <a
              href="/Sowndarya_fsd_resume.pdf"
              className="resume-btn"
              download
            >
              Resume
            </a>
          </li>
        </ul>

        <div
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;