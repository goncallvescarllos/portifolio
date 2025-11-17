// Hero Section
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="scan-line"></div>
        <div className="crt-effect"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title pixel-text">
              <span className="title-line">Gonçallves </span>
              <span className="title-line">Carllos</span>
            </h1>
            <p
              className="hero-subtitle glitch-text"
              data-text="TECNOLOGIA & INOVAÇÃO"
            >
              TECNOLOGIA & INOVAÇÃO
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary pixel-border">
                MEUS PROJECTOS
              </button>
              <a
                href="public/CV.pdf"
                download
                className="btn btn-secondary pixel-border"
              >
                Baixar CV
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="pixel-frame">
              <div className="profile-image">
                <img
                  src="/pic1.png"
                  alt="Gonçallves Carllos"
                  className="profile-image"
                />

                <div className="image-placeholder">
                  #FullStack #ReactDev #Inovação #Moçambique #TechCreator
                </div>
              </div>
              <div className="frame-decoration"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="pixel-text">Arraste</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
