import React from 'react'
import  './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-header footer-column">
          <h2 className='footer-tittle'>Gym<span>&</span>Fitness</h2>
          <p className='footer-title-label'>Tu meta es la nuestra. Entrena con nosotros y supera tus límites.</p>

        </div>
        <div className="social-links-container footer-column">
          <p className='footer-label'>Siguenos</p>
          <ul>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-facebook-f"></i></li>
            <li><i className="fa-brands fa-x-twitter"></i></li>
          </ul>
        </div>
        <div className="links-footer ">
          <div className="links-nav-container footer-column">
            <p className='footer-label'>Acceso Rapido</p>
            <ul className='nav-links-footer'>
              <li><a href="#">Inicio</a></li>
              <li><a href="home">Programas</a></li>
              <li><a href="#progrms">Conocenos</a></li>
              <li><a href="#pricing">Planes</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div className="links-services footer-column">
            <p className="footer-label">Servicios</p>

            <ul className='services-footer-list'>
            <li><a href="#">Entrenamiento Personal</a></li>
            <li><a href="#">Clases Grupales</a></li>
            <li><a href="#">Nutrición</a></li>
            <li><a href="#">Rehabilitación</a></li>
            </ul>

          </div>
        </div>
        <div className="footer-rights">
          <p className="footer-bottom-text">Todos los derechos reservados. &copy; 2026</p>
            <div className="footer-bottom-links">
                <a href="#">Términos y Condiciones</a>
                <a href="#">Política de Privacidad</a>
            </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer