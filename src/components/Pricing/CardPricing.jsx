import React from 'react'
import './cardPricing.css'

const CardPricing = ({plan, featured}) => {
  return (
    <article className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
        <div className="card-content">
            <p className={`card-pricing-label ${plan.featured ? 'label-featured' : ''}`}>{plan.name}</p>
            <p className='card-price'><span>$</span>{plan.price}/mes</p>
            <ul className='card-price-list'>
                {plan.description.map((item, index) => (
                  <li className='plan-feature' key={index}>{item}</li>
                ))}
            </ul>
            <button className={`card-price-btn ${plan.featured ? 'btn-featured' : ''}`}>Unete Ahora</button>
        </div>
    </article>
  )
}

export default CardPricing