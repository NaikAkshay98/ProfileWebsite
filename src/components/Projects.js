import React, { useState } from 'react';

const projects = [
  {
    title: "Pawsome Care",
    description: "A full-stack booking platform for dog caretakers and owners, handling over 50 weekly bookings with a scalable design projected to support 100+ users.",
    techStack: "React.js, Node.js, Express.js, MongoDB, RESTful API, GitHub, Figma, Heroku, Postman, HTML, JavaScript",
    link: "https://pawsome-care-admin.vercel.app/",
  },
  {
    title: "Movie Piracy",
    description: "A scalable movie streaming platform using Advanced React (hooks, context API) and Spring Boot, integrating features like Top 10 shows and personalized recommendations.",
    techStack: "Advanced React, Spring Boot, RESTful APIs, Vercel, JSON, Figma, Agile Methodology",
    link: "https://movie-piracy-sigma.vercel.app/",
  }
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleHover = (project) => {
    setHoveredProject(project);
  };

  const handleLeave = () => {
    setHoveredProject(null);
  };

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      {/* Full-Screen Iframe for Selected Project */}
      {selectedProject && (
        <div className="project-iframe-container">
          <iframe
            src={selectedProject.link}
            title={selectedProject.title}
            className="project-iframe"
          ></iframe>
          <button onClick={handleClose} className="iframe-close-btn">
            &#10006;
          </button>
        </div>
      )}

      {/* Dynamic Background Iframe for Hovered Project */}
      {hoveredProject && !selectedProject && (
        <iframe
          src={hoveredProject.link}
          title={hoveredProject.title}
          className="project-hover-iframe"
        />
      )}

      {/* Project Content Wrapper with Conditional Blur */}
      <div className={`project-content-wrapper ${selectedProject ? 'blurred' : ''}`}>
        <div className="grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onMouseEnter={() => handleHover(project)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(project)}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-tech-stack">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <p className="project-view-text">
                  Click to View Project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
