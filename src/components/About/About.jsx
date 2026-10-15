import React from 'react'
import './about.css'

function About() {
  return (
    <section id='about'>
        <div className="about-imgs">
            <div><img src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg" alt="team training" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
        </div>
        <div className="about-content">
            <h2 className='about-tittle'>Sobre Nosotros</h2>
            <p className='about-label'>¿Porque Unirte?</p>
            <ul>
                <li>
                    <details className='about-item'>
                        <summary className='about-item-left'>
                            <div className='about-item-icon'>
                                <i>I</i>
                            </div>
                            Entrenanadores Profesionales
                        </summary>
                        <p className="about-detail">Nuestros entrenadores son profesionales certificados con años de experiencia en el campo del fitness.</p>
                    </details>
                </li>
                <li>
                    <details className='about-item'>
                        <summary className='about-item-left'>
                            <div className='about-item-icon'>
                                <i>I</i>
                            </div>
                            Programas Personalizados
                        </summary>
                        <p className="about-detail">Ofrecemos programas de entrenamiento adaptados a tus necesidades y objetivos individuales.</p>
                    </details>
                </li>
                <li>
                    <details className='about-item'>
                        <summary className='about-item-left'>
                            <div className='about-item-icon'>
                                <i>I</i>
                            </div>
                            Comunidad Activa
                        </summary>
                        <p className="about-detail">Únete a una comunidad de personas motivadas que comparten tus metas de fitness y bienestar.</p>
                    </details>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About