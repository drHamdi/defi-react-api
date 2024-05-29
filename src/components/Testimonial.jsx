import React from 'react'

import { FaCalculator } from "react-icons/fa6";

import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial'>
    <div className='container'>
        <div className='outline'>
            <div className='content'>
                <i className='pilote'><FaCalculator/> KHEDHRI CONSULTING</i>
                <p className='body pilote'>
                Avec notre équipe dévouée de professionnels, nous vous aiderons à naviguer dans les complexités de la gestion financière, 
                afin que vous puissiez vous concentrer sur ce que vous faites le mieux : développer votre entreprise !
                 Contactez-nous dès aujourd'hui pour planifier une consultation et transformer vos objectifs financiers en réalité


                </p>
                <div className='name pilote'>
                    <p className='pilote'>Mariem Khedhri</p>
                    <p className='pilote'>Expert Comptable</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonial
