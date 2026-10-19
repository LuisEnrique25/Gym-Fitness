import React from 'react'
import './contact.css'

function Contact() {
    const handleSubmit = (event) => {
    event.preventDefault();
    alert("Esta pagina es de prueba, por lo tanto algunas funciones estaran desactivadas");
  };

  return (
    <section id='contact' className='section-contact'>
        <div className="contact-header contact-header-principal">

        <h2 className='contact-title'>Tienes alguna pregunta?</h2>
        <p className='contact-label'>Contacto</p>
        </div>
         <div className="contact-container">
                    <div className="contact-img">
                        <img src="https://media.istockphoto.com/id/2154960082/es/foto/joven-asi%C3%A1tico-corriendo-en-cinta-de-correr-fitness-gym-exercise.jpg?s=1024x1024&w=is&k=20&c=lKCxBUwUrXgkj_FcO_i9elh2Ugu8d2u0K9qkP7KiQmQ=" alt="Contact Image"/>
                    </div>
                    <div className="contact-content">
                        <p className='contact-description'>Listo para empezar tu transformacion? Registra tu correo con <span>Gym<span>&</span>Fitness</span> para recibir mas informacion.</p>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="email" className="contact-input" placeholder="Ingresa tu correo" required/>
                            <button type="submit" className="contact-btn" >Regristrar</button>
                        </form>
                    </div>
                </div>
               
    </section>
  )
}

export default Contact