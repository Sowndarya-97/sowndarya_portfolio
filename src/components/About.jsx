import React from "react";
import "./About.css";

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT SIDE */}

          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >

              <div
                className="about-icon"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                👨‍💻
              </div>

              <h3
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Full Stack Developer
              </h3>

              <p
                className="tech-line"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                React • Java • Spring Boot • MySQL
              </p>

              <div
                className="highlights"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <span>✓ Frontend Development</span>
                <span>✓ Full Stack Development</span>
                <span>✓ REST API Integration</span>
                <span>✓ Responsive Design</span>
                <span>✓ Database Management</span>
                <span>✓ Client Communication</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >

            <h2
              className="section-title"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              About Me
            </h2>

            <p
              className="about-text"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I'm a Full Stack Developer with nearly 1 year of
              professional experience building responsive web
              applications and business solutions.
            </p>

            <p
              className="about-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              After completing my B.E. in Electrical and Electronics
              Engineering and Master's in Power Systems Engineering,
              I developed a strong interest in web development and
              software engineering.
            </p>

            <p
              className="about-text"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              This passion led me to complete Full Stack Java
              Development training and successfully transition
              into the software industry.
            </p>

            <p
              className="about-text"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Over the past year, I've worked with two software
              companies, delivered 10+ live projects, collaborated
              directly with clients, gathered business requirements,
              and developed modern web applications.
            </p>

            <p
              className="about-text"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              My expertise includes React.js, Java, Spring Boot,
              REST APIs, and MySQL.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;