import React from "react";

import "./Contact.css";

import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      <div className="container">

        <div
          className="text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >

          <span className="section-tag">
            CONTACT
          </span>

          <h2 className="section-title">
            Let's Connect
          </h2>

          <p className="section-subtitle">
            I'm actively looking for Frontend Developer, React.js Developer and
            Full Stack Java Developer opportunities.
            Feel free to reach out through any of the platforms below.
          </p>

        </div>

        <div className="contact-wrapper">

          {/* EMAIL */}

          <a
            href="mailto:yourmail@gmail.com"
            className="contact-card"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div className="contact-info">
              <h4>Email</h4>
              <p>smartsowndarya06@gmail.com</p>
            </div>

            <FaArrowRight className="arrow" />
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/919489161597"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="contact-icon">
              <FaWhatsapp />
            </div>

            <div className="contact-info">
              <h4>WhatsApp</h4>
              <p>Chat with me</p>
            </div>

            <FaArrowRight className="arrow" />
          </a>

          {/* LINKEDIN */}

          <a
            href="https://linkedin.com/in/sowndarya-sakthi97"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>

            <div className="contact-info">
              <h4>LinkedIn</h4>
              <p>View my profile</p>
            </div>

            <FaArrowRight className="arrow" />
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/Sowndarya-97"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div className="contact-info">
              <h4>GitHub</h4>
              <p>Explore my repositories</p>
            </div>

            <FaArrowRight className="arrow" />
          </a>

        </div>

        <div
          className="availability"
          data-aos="zoom-in"
          data-aos-delay="600"
        >

          <div className="status-dot"></div>

          <span>Available for Immediate Joining</span>

        </div>

        <div
          className="location"
          data-aos="fade-up"
          data-aos-delay="700"
        >

          <FaMapMarkerAlt />

          <span>Coimbatore, Tamil Nadu, India</span>

        </div>

      </div>

    </section>
  );
};

export default Contact;