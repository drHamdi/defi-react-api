import React from 'react'
import './Signup.css'

import formation from '../assets/formation.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={formation} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Découvrez notre formation éducative innovante</h2>
                    <p> Conçue pour répondre aux besoins du marché actuel. Enrichissez vos compétences et boostez votre carrière grâce à nos programmes personnalisés et interactifs, 
                        dispensés par des experts reconnus. Inscrivez-vous dès maintenant et transformez votre avenir professionnel avec notre soutien exceptionnel!</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Reserver Votre Place</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
