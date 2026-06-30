import React from "react";

import "./Footer.css";
import { FaWhatsapp, FaRocket } from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

      {/* WhatsApp */}

      <a
        href="https://wa.me/919489161597"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      {/* Rocket */}

      <button
        className="rocket-float"
        onClick={scrollTop}
      >
        <FaRocket />
      </button>

      {/* Footer */}

      <footer
  className="footer"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="100"
>

  <div className="container">

    <p>
      Designed & Developed by <span>Sowndarya</span> • Built with React.js
    </p>

  </div>

</footer>
    </>
  );
};

export default Footer;