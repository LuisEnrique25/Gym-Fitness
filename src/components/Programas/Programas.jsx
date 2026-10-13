import React from 'react'
import './programs.css'
import CardPrograms from './CardPrograms'

function Programas(programs) {
  return (
    <section id='programs' className='section-programs'>
      <div className="programs-header">
        <p className='section-label'>Nuestros Programas</p>
        <h2 className='section-tittle'>Construye tu cuerpo</h2>
      </div>
      <div className="cards">
        <CardPrograms/>
      
      </div> 
    </section>
  )
}

export default Programas