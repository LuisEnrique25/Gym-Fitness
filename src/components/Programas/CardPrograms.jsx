import React from 'react'
import './card.css'

const CardPrograms = ({program}) => {
    console.log(program)
  return (
    <article className='card'>
        <img src={`${program.img}`} alt={`${program.title}`}className='card-img' />
        <div className='card-body'>
            <h3 className='card-title'>{`${program.title}`}</h3>
            <p className='card-label'>{`${program.description}`}</p>
        </div>
    </article>
  )
}

export default CardPrograms