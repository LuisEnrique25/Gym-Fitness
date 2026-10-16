import React from 'react'
import './about.css'

function About() { 
  return (
    <section id='about' className='about-section'>
        <div className="about-header about-header-principal">

        <h2 className='about-title'>Sobre Nosotros</h2>
        <p className='about-label'>¿Porque Unirte?</p>
        </div>
        <div className="about-container">
            <div className="about-imgs">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.connectionsbyfinsa.com%2Fwp-content%2Fuploads%2F2023%2F12%2Fclassicfit-interiorismo-fitness03.jpg&f=1&nofb=1&ipt=c8ea587ad9b08671ee6a39b721940f2051a9e614110e5377666d33ebaea0df25&ipo=images" alt="team training" className='about-img img-principal'/>
                <img src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg" alt="coach teaching" className='about-img img-secondary' />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.yyalRPzvG6KDjvcuSsjCuwHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=224f62aae49484fe94d747dacdd0c80f215c91160487031bb499262a20116eb0&ipo=images" alt="training" className='about-img img-secondary' />
            </div>
            <div className="about-content">
                <div className="about-header about-header-secondary">

                    <h2 className='about-title'>Sobre Nosotros</h2>
                    <p className='about-label'>¿Porque Unirte?</p>
                </div>
                <ul className='about-list'>
                    <li>
                        <details className='about-item'>
                            <summary >
                                <div className='about-item-icon'>
                                    <i className="fa-solid fa-dumbbell"></i>
                                </div>
                            Entrenanadores Profesionales
                            </summary>
                            <p className="about-detail">Nuestros entrenadores son profesionales certificados con años de experiencia en el campo del fitness.</p>
                        </details>
                    </li>
                    <li>
                    <details className='about-item'>
                        <summary >
                            <div className='about-item-icon'>
                               <i className="fa-solid fa-heart-pulse"></i>
                            </div>
                            Programas Personalizados
                        </summary>
                        <p className="about-detail">Ofrecemos programas de entrenamiento adaptados a tus necesidades y objetivos individuales.</p>
                        </details>
                    </li>
                    <li>
                        <details className='about-item'>
                            <summary >
                                <div className='about-item-icon'>
                                <i className="fa-solid fa-users"></i>
                            </div>
                            Comunidad Activa
                        </summary>
                            <p className="about-detail">Únete a una comunidad de personas motivadas que comparten tus metas de fitness y bienestar.</p>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About