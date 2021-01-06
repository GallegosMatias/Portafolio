import React from 'react';

import fbIco from '../assets/contact/facebook.svg';
import igIco from '../assets/contact/instagram.svg';
import ghIco from '../assets/contact/github.svg';
import liIco from '../assets/contact/linkedin.png';

import './styles/Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
          <form action="/suscripcion/" className="form-email">
              <h3 className="juntos">¿Creamos algo juntos?</h3>
              {/* <input type="text" placeholder="Déjame tu email" id="email" />
              <button>Enviar</button> */}
              <h3>Contactame por cualquiera de mis redes!</h3>
          </form>
          <div className="social">
              <a href="https://www.facebook.com/Siempr3.Fuerte" className="social-link facebook" target="_blank">
                <img src={fbIco} alt="Facebook"/>
              </a>

              <a href="https://www.instagram.com/irunga.ray/" className="social-link instagram" target="_blank">
                <img src={igIco} alt="Instagram"/>
              </a>

              <a href="https://github.com/Irungaray" className="social-link github" target="_blank">
                <img src={ghIco} alt="GitHub"/>
              </a>

              <a href="https://www.linkedin.com/in/lionel-irungaray-1967001a4/" className="social-link linkedin" target="_blank">
                <img src={liIco} alt="LinkedIn"/>
              </a>
          </div>
      </div>
    </section>
  );
}

export default Contact;