import React from 'react'
import './card.css'

const CardPrograms = ({program}) => {
  return (
    <article className='card'>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmarathonhandbook.com%2Fwp-content%2Fuploads%2FCardio-Or-Strength-First.jpg&f=1&nofb=1&ipt=8232ba5a2a746c54e1264df3c6a602c08a10f90a095f9159b3680e1130ef2c22&ipo=images" alt="" className='card-img' />
        <div className='card-body'>
            <h3 className='card-title'>Cardio</h3>
            <p className='card-label'>Mejora tu resistencia y condición física.</p>
        </div>
    </article>
  )
}

export default CardPrograms