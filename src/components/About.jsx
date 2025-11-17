// About Section

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title pixel-text">SOBRE MIM</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Desenvolvedor full-stack apaixonado por criar soluções
              tecnológicas que resolvam problemas reais do nosso contexto.
              Especializado em desenvolver aplicações web e mobile adaptadas à
              realidade moçambicana.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number pixel-text">+20</span>
                <span className="stat-label">PROJECTOS</span>
              </div>
              <div className="stat">
                <span className="stat-number pixel-text">+3</span>
                <span className="stat-label">ANOS EXP</span>
              </div>
              <div className="stat">
                <span className="stat-number pixel-text">+15</span>
                <span className="stat-label">CLIENTES</span>
              </div>
            </div>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Desenvolvimento Rápido</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <span>Focado em Resultados</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌍</span>
                <span>Contexto Moçambicano</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="retro-computer">
              <div className="computer-screen">
                <div className="screen-content">
                  <div className="command-line">
                    <span>&gt; Goncallves Carllos --</span>
                  </div>
                  <div className="command-line">
                    <span>&gt; React, Node.js, JavaScript</span>
                  </div>
                  <div className="command-line">
                    <span>&gt; Localização: Maputo, MZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
