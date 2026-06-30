import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      <div className="container">

        <h2
          className="skills-title"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Skills & Technologies
        </h2>

        <div className="row g-4">

          {/* Frontend */}

          <div
            className="col-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="skill-card">

              <h3>Frontend Technologies</h3>

              <div className="skill-tags">
                <span data-aos="zoom-in" data-aos-delay="250">HTML</span>
                <span data-aos="zoom-in" data-aos-delay="300">CSS</span>
                <span data-aos="zoom-in" data-aos-delay="350">JavaScript</span>
                <span data-aos="zoom-in" data-aos-delay="400">Bootstrap</span>
                <span data-aos="zoom-in" data-aos-delay="450">React.js</span>
                <span data-aos="zoom-in" data-aos-delay="500">Responsive Design</span>
              </div>

            </div>
          </div>

          {/* Tools */}

          <div
            className="col-lg-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="skill-card">

              <h3>Tools & Platforms</h3>

              <div className="skill-tags">
                <span data-aos="zoom-in" data-aos-delay="450">GitHub</span>
                <span data-aos="zoom-in" data-aos-delay="500">VS Code</span>
                <span data-aos="zoom-in" data-aos-delay="550">AI Tools</span>
                <span data-aos="zoom-in" data-aos-delay="600">Hostinger</span>
                <span data-aos="zoom-in" data-aos-delay="650">Netlify</span>
                <span data-aos="zoom-in" data-aos-delay="700">Neocities</span>
              </div>

            </div>
          </div>

          {/* Backend */}

          <div
            className="col-lg-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="skill-card">

              <h3>Backend Technologies</h3>

              <div className="skill-tags">
                <span data-aos="zoom-in" data-aos-delay="650">Core Java</span>
                <span data-aos="zoom-in" data-aos-delay="700">OOPs</span>
                <span data-aos="zoom-in" data-aos-delay="750">Collections</span>
                <span data-aos="zoom-in" data-aos-delay="800">Spring Boot</span>
                <span data-aos="zoom-in" data-aos-delay="850">Spring Security</span>
                <span data-aos="zoom-in" data-aos-delay="900">REST APIs</span>
                <span data-aos="zoom-in" data-aos-delay="950">JDBC</span>
                <span data-aos="zoom-in" data-aos-delay="1000">MySQL</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;