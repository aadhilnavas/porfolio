

import React from 'react';
import './styles/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects = () => {
  const projectData = [
    {
      title: "To-Do List Application",
      description:
        "A responsive To-Do List application built using React.js with Firebase integration for real-time database management.",
      technologies: ["React.js", "Firebase", "JavaScript"],
      link: "#",
    },
    {
      title: "Pharmacy Management System",
      description:
        "A comprehensive system developed for medicine inventory and management using Express.js. Features include authentication and user login.",
      technologies: ["Express.js", "Node.js", "MongoDB"],
      link: "#",
    },

    {
      title: "Health Tracker",
      description:
        "Developed a fitness tracking app with an interactive dashboard, real-time updates, and responsive design.",
      technologies: ["Angular 19", "CSS", "TypeScript", "HTML","Bootstrap"],
      link: "https://health-tracker-xi-three.vercel.app/",
    },

    {
      title: "2D Face Recognition in Airport Security",
      description:
        "A college project implementing a 2D face recognition system for airport security using OpenCV for enhanced safety.",
      technologies: ["Python", "OpenCV"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio site developed to showcase my skills and projects. Created versions using both HTML and React.",
      technologies: ["HTML", "CSS", "React.js"],
      link: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card project-card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <ul className="list-unstyled">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="badge bg-primary me-2">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} className="btn btn-outline-primary mt-3" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

