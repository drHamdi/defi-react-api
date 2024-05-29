import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import Crypto from '../assets/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Établissement des états financiers et audit</p>
                    <h1>ÉLABORATION D'UN BUSINESS PLAN SERVICE DE COMPTABILITÉ ET FISCALITÉ ET FORMATION</h1>
                    <p>Avec notre équipe dévouée de professionnels, nous vous aiderons à naviguer dans les complexités de la gestion financière, afin que vous puissiez vous concentrer sur ce que vous faites le mieux : développer votre entreprise ! Contactez-nous dès aujourd'hui pour planifier une consultation et transformer vos objectifs financiers en réalité</p>
                   
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <a href='/contact'> <Link to='/contact'><button className='btn'>Consultation Gratuit</button></Link></a>
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
