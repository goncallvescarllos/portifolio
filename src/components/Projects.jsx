// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "MUZZA",
      description: "Plataforma para pedidos de pizza com interface moderna",
      tech: ["React", "Node.js", "Tailwindcss"],
      category: "Personal",
    },
    {
      title: "E-COMMERCE LOCAL",
      description: "Marketplace para produtos moçambicanos",
      tech: ["Next.js", "MongoDB", "Stripe"],
      category: "E-commerce",
    },
    {
      title: "APP AGRICULTURA",
      description: "Aplicativo para agricultores moçambicanos",
      tech: ["React Native", "Firebase", "GIS"],
      category: "AgriTech",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title pixel-text">MEUS PROJECTOS</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title pixel-text">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <button className="btn-link">VER DEMO</button>
                <button className="btn-link">CÓDIGO</button>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
