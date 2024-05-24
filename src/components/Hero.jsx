import React from 'react'
import './Hero.css'
import Crypto from '../assets/Services/s.presentation.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Établissement des états financiers et audit</p>
                    <h1>ÉLABORATION D'UN BUSINESS PLAN SERVICE DE COMPTABILITÉ ET FISCALITÉ</h1>
                    <p>Avec notre équipe dévouée de professionnels, nous vous aiderons à naviguer dans les complexités de la gestion financière, afin que vous puissiez vous concentrer sur ce que vous faites le mieux : développer votre entreprise ! Contactez-nous dès aujourd'hui pour planifier une consultation et transformer vos objectifs financiers en réalité</p>
                   
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Consultation Gratuit</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
