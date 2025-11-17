// Skills Section
const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS3", level: 85 },
    { name: "Tailwindcss", level: 75 },
    { name: "Flutter", level: 70 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title pixel-text">MINHAS SKILLS</h2>

        <div className="skills-content">
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name pixel-text">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-illustration">
            <div className="retro-chip" style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src="/icon3.png"
                alt="dev"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
              <div className="chip-pins"></div>
              {/* <div className="chip-text">DEV_MZ</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
