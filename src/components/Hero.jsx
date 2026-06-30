import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaReact,
  FaJava,
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React Developer",
      "Frontend Developer",
      "Java Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });

  return (
    <section id="home" className="hero-section">

      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* LEFT */}

          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >

            <div
              className="hello-badge"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              👋 Hi, I'm
            </div>

            <h1
              className="hero-name"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Sowndarya S
            </h1>

            <h2
              className="hero-title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I'm a{" "}
              <span className="gradient-text">
                {text}
                <Cursor />
              </span>
            </h2>

            <p
              className="hero-description"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Building modern, responsive and scalable web applications
              using React, Java, Spring Boot and MySQL.
            </p>

            <div
              className="hero-stats"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            >

              <div className="stat-card">
                <h3>1</h3>
                <p>Year Experience</p>
              </div>

              <div className="stat-card">
                <h3>10+</h3>
                <p>Live Projects</p>
              </div>

              <div className="stat-card">
                <h3>Full Stack</h3>
                <p>React • Java</p>
              </div>

            </div>

            <div
              className="hero-buttons"
              data-aos="fade-up"
              data-aos-delay="600"
            >

              <a href="/resume.pdf" className="btn-download">
                Download Resume
              </a>

              <a href="#projects" className="btn-projects">
                View My Projects →
              </a>

            </div>

            <div
              className="social-icons"
              data-aos="fade-up"
              data-aos-delay="700"
            >

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>

              <a href="#">
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="300"
          >

            <div className="image-wrapper">

              <div
                className="rotating-ring"
                data-aos="zoom-in"
                data-aos-delay="400"
              ></div>

              <div
                className="floating-icon react"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <FaReact />
              </div>

              <div
                className="floating-icon java"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <FaJava />
              </div>

              <div
                className="floating-icon spring"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <SiSpringboot />
              </div>

              <div
                className="floating-icon mysql"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <SiMysql />
              </div>

              <img
                src="/profile.jpeg"
                alt="profile"
                className="profile-image"
                data-aos="zoom-in"
                data-aos-delay="500"
              />

            </div>

          </div>

        </div>
      </div>

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#112240"
          fillOpacity="1"
          d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,197.3C1120,203,1280,245,1360,266.7L1440,288L1440,320L0,320Z"
        ></path>
      </svg>

    </section>
  );
};

export default Hero;