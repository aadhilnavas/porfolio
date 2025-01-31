// import React from 'react';
// import './styles/Projects.css'; // Style for Projects component

// const Projects = () => {
//   return (
//     <section className="projects" id="projects">
//       <h2 className="section-title">My Projects</h2>
//       <div className="project-list">
//         {/* Project 1 */}
//         <div className="project">
//           <img 
//             src="https://via.placeholder.com/300x200" 
//             alt="Project 1" 
//             className="project-image" 
//           />
//           <div className="project-info">
//             <h3>Project Title 1</h3>
//             <p>Description of the project goes here. You can explain the technologies used and the goal of the project.</p>
//             <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
//           </div>
//         </div>

//         {/* Project 2 */}
//         <div className="project">
//           <img 
//             src="https://via.placeholder.com/300x200" 
//             alt="Project 2" 
//             className="project-image" 
//           />
//           <div className="project-info">
//             <h3>Project Title 2</h3>
//             <p>Description of the project goes here. You can explain the technologies used and the goal of the project.</p>
//             <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
//           </div>
//         </div>

//         {/* Add more projects here */}
//       </div>
//     </section>
//   );
// };

// export default Projects;

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

