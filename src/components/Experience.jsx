import React from "react";

import "./Experience.css";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      <div className="container">

        <div
          className="text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span className="section-tag">CAREER JOURNEY</span>

          <h2 className="section-title">
            Professional Experience
          </h2>

          <p className="section-subtitle">
            My journey in building scalable web applications and delivering business solutions.
          </p>
        </div>

        <div className="timeline">

          {/* Company 1 */}

          <div
            className="timeline-item"
            data-aos="fade-right"
            data-aos-duration="1200"
          >

            <div className="timeline-dot">
              <FaBriefcase />
            </div>

            <div className="experience-card">

              <div className="experience-header">

                <div>
                  <h3>Profenaa Infotech IT Solutions</h3>
                  <h5>Full Stack Java Developer</h5>
                </div>

                <span className="experience-duration">
                  <FaCalendarAlt /> 8 Months
                </span>

              </div>

              <div className="experience-location">
                <FaMapMarkerAlt /> Kinathukadavu, Coimbatore
              </div>

              <ul className="experience-list">

                <li>Developed responsive web applications using React.js, HTML, CSS, JavaScript and Bootstrap.</li>

                <li>Contributed to 2+ live projects including Franchise Management, Nursing, Teaching & Training and Blog platforms.</li>

                <li>Collaborated closely with the development team throughout the project lifecycle.</li>

                <li>Delivered frontend features focused on responsiveness and user experience.</li>

                <li>Trained students in frontend development technologies.</li>

                <li>Participated in HR interview processes by screening and interviewing candidates.</li>

                <li>Handled client communication through calls and emails.</li>

                <li>Collected business requirements and coordinated with clients.</li>

                <li>Managed fresh lead registrations and project documentation.</li>

                <li>Supported project outsourcing and business development activities.</li>

              </ul>

              <div className="tech-stack">

                <span>React.js</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>GitHub</span>

              </div>

            </div>

          </div>

          {/* Company 2 */}

          <div
            className="timeline-item"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          >

            <div className="timeline-dot">
              <FaBriefcase />
            </div>

            <div className="experience-card">

              <div className="experience-header">

                <div>
                  <h3>PT Intelligent Machines</h3>
                  <h5>Web Developer</h5>
                </div>

                <span className="experience-duration">
                  <FaCalendarAlt /> 3 Months
                </span>

              </div>

              <div className="experience-location">
                <FaMapMarkerAlt /> Eachanari, Coimbatore
              </div>

              <ul className="experience-list">

                <li>Contributed to 6+ live projects by collaborating with the development team.</li>

                <li>Developed responsive web applications using PHP (Frontend & Backend).</li>

                <li>Worked directly with clients to conduct project demonstrations.</li>

                <li>Gathered business requirements and functional specifications.</li>

                <li>Managed database operations and backend integration.</li>

                <li>Performed application testing, debugging and issue resolution.</li>

                <li>Collaborated with developers to ensure timely project delivery.</li>

                <li>Delivered high-quality business solutions based on client requirements.</li>

              </ul>

              <div className="tech-stack">

                <span>PHP</span>
                <span>MySQL</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;