// Contact Section
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title pixel-text">ENTRE EM CONTACTO</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3 className="pixel-text">EMAIL</h3>
                <p>goncallvescarllos@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h3 className="pixel-text">CELULAR</h3>
                <p>+258 85 735 7758</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3 className="pixel-text">LOCALIZAÇÃO</h3>
                <p>Maputo, Moçambique</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="SEU NOME"
                value={formData.name}
                onChange={handleChange}
                className="form-input pixel-border"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="SEU EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="form-input pixel-border"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="SUA MENSAGEM"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="form-input pixel-border"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary pixel-border">
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
