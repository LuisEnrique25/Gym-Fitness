import React from 'react'
import './pricing.css'
import CardPricing from './CardPricing'

function Pricing({plans}) {
  return (
    <section id='pricing' className='section-pricing'>
        <div className='prices-conteiner'>
            <div className="pricing-header">
                <p className='pricing-label'>Precios</p>
                <h2 className='pricing-tittle'>Elige tu Plan</h2>
            </div>
            <div className="pricing-cards">
                {plans.map((plan) => (
                    
                <CardPricing plan={plan} key={plan.id}/>
                    
                ))}
            </div>
        </div>
    </section>
  )
}

export default Pricing