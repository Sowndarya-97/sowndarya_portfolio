import React from "react";
import "./Projects.css";

import franchise from "../assets/projects/franchise.png";
import pybot from "../assets/projects/pybot.png";
import crm from "../assets/projects/dhanusu.png";
import thirukural from "../assets/projects/thirukkural.png";
import printers from "../assets/projects/krishna.png";
import anywebsite from "../assets/projects/anywebsite.png";

const projects = [
  {
    company: "Profenaa Infotech IT Solutions",
    title: "Profenaa Franchise Network",
    image: franchise,
    status: "Professional Project",
    description:
      "Responsive franchise management website with enquiry functionality using MailJS. Designed for multiple franchise branches with a clean and mobile-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI", "MailJS", "SEO"],
    live: "https://www.profenaa.com/",
  },
  {
    company: "Profenaa Infotech IT Solutions",
    title: "Pybot Academy",
    image: pybot,
    status: "Demo Project",
    description:
      "Academy website built using React.js to showcase courses, internships and training programs with a modern responsive UI.",
    tech: ["React.js", "Bootstrap", "Responsive UI", "MailJS", "SEO"],
    live: "",
  },
  {
    company: "Profenaa Infotech IT Solutions",
    title: "Student CRM",
    image: crm,
    status: "Demo Project",
    description:
      "CRM application with Student and Admin dashboards for course registration, student management and record tracking using Spring Boot and MySQL.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    live: "",
  },
  {
    company: "PT Intelligent Machines",
    title: "Thirukural World",
    image: thirukural,
    status: "Professional Project",
    description:
      "Multilingual Thirukural platform featuring theme switching, language selection and multiple interactive pages.",
    tech: ["PHP", "Bootstrap", "MySQL", "CSS", "Responsive UI", "Javascript", "Jquery Plugin", "SEO"],
    live: "https://thirukkural.world/",
  },
  {
    company: "PT Intelligent Machines",
    title: "Sri Krishna Printers",
    image: printers,
    status: "Professional Project",
    description:
      "Business website showcasing printing services with online enquiry functionality and responsive design.",
    tech: ["PHP", "Bootstrap", "MySQL", "CSS", "Responsive UI", "Javascript", "SEO"],
    live: "https://srikrishnaprinters.anywebsite.live/",
  },
  {
    company: "PT Intelligent Machines",
    title: "AnyWebsiteLive",
    image: anywebsite,
    status: "Professional Project",
    description:
      "Platform for website accessibility, SEO, speed and scalability analysis with drag-and-drop website builder.",
    tech: ["PHP", "Bootstrap", "MySQL", "CSS", "Responsive UI", "Javascript", "SEO"],
    live: "https://anywebsite.live/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span className="section-tag">LIVE PROJECTS</span>

          <h2 className="section-title">
            Professional Projects
          </h2>

          <p className="section-subtitle">
            Professional projects developed during my experience as a Full Stack
            Developer.
          </p>
        </div>

        {["Profenaa Infotech IT Solutions", "PT Intelligent Machines"].map(
          (company, companyIndex) => (
            <div key={company} className="company-block">

              <h3
                className="company-title"
                data-aos={companyIndex === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                {company}
              </h3>

              <div className="project-grid">

                {projects
                  .filter((project) => project.company === company)
                  .map((project, index) => {

                    const animations = [
                      "fade-right",
                      "fade-up",
                      "fade-left",
                    ];

                    return (
                      <div
                        className="project-card"
                        key={index}
                        data-aos={animations[index % 3]}
                        data-aos-delay={index * 150}
                        data-aos-duration="1000"
                      >

                        <div className="image-box">
                          <img
                            src={project.image}
                            alt={project.title}
                          />
                          <span className="status">
                            {project.status}
                          </span>
                        </div>

                        <div className="project-content">

                          <h4>{project.title}</h4>

                          <p>{project.description}</p>

                          <div className="tech-stack">
                            {project.tech.map((tech, i) => (
                              <span key={i}>{tech}</span>
                            ))}
                          </div>

                          <div className="buttons">

                            {project.live ? (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="live-btn"
                              >
                                Live Demo
                              </a>
                            ) : (
                              <span className="demo-btn">
                                Internal Demo
                              </span>
                            )}

                          </div>

                        </div>

                      </div>
                    );
                  })}

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
};

export default Projects;