import React from 'react'
import './pricing.css'
import CardPricing from './CardPricing'

function Pricing() {
  return (
    <section id='pricing section-pricing'>
        <div className='prices-conteiner'>
            <div className="pricing-header">
                <p className='pricing-label'>Precios</p>
                <h2 className='pricing-tittle'>Elige tu Plan</h2>
            </div>
            <div className="pricing-cards">
                <CardPricing/>
            </div>
        </div>
    </section>
  )
}

export default Pricing