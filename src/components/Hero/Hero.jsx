import './hero.css'

import React from 'react'

function Hero() {
  return (
    <section className='section-hero' id='home'>
      <p className='hero-bg-text'>Fit</p>

      <div className='hero-left'>

        <p className='hero-tag'>Mejor centro Fitness</p>
        <h1 className="hero-tittle">Fitnes para <span>LUCIR BIEN</span></h1>
        <p className="hero-sub">Con <strong>Gym&Fitness</strong>fisico se transforma y se vera bien! ¿Interesado? !Unete Ahora</p>

        {/** BTNS */}
        <div className="btn-group">
          <a href="#" className="btn-primario">Unete!</a>
          <a href="#" className="btn-secundario">Saber Más!</a>
        </div>

          {/*    STATS     */}
        <div className="hero-stats">
          <div>
            <a href="#" className="stat-num">36</a>
            <a href="#" className="stat-label">Programas de Ejercicios</a>
          </div>

          <div>
            <a href="#" className="stat-num">+250</a>
            <a href="#" className="stat-label">Miembros</a>
          </div>

          <div>
            <a href="" className="stat-num">+25</a>
            <a href="" className="stat-label">Entrenadores Capacitados</a>
          </div>

        </div>
      </div>


      {/*----- IMG AND SVG-----     */}
      <div className="hero-right">
        <div className="hero-img-container">
          <div className="hero-img-bg">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.statspros.com%2Fwp-content%2Fuploads%2F2025%2F10%2FBest-Gyms-in-Brookings-OR.jpg&amp;f=1&amp;nofb=1&amp;ipt=8dd8c0d53363a15dc0db0105db5d5956ce0bc97c44af34f6755a289b1daf6c39" alt="" />
          </div>
          <div className="scroll-badge">
            <svg viewbox="0 0 80 80">
                <defs>
                    <path id="circle" d="M 40,40 m -27,0 a 27,27 0 1,1 54,0 a 27,27 0 1,1 -54,0" />
                </defs>
                <text fill="#8aab90" font-size="9" letter-spacing="2.8">
                  <textPath href="#circle">DESLIZA HACIA ABAJO</textPath>
                </text>
              </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero