import React from 'react'
import { Link } from 'react-router-dom'
import Crypto from '../assets/Services/s.consulting.jpg'



import './Featured.css'

const Featured = () => {


    // console.log(data)

   

    return (
        <div className='signup'>
        <div className='container'>
            {/* left */}
            <div className='left'>
                <img src={Crypto} alt='' />
            </div>

            {/* right */}
            <div className='right'>
                <h2>Boostez votre entreprise avec notre service de comptabilité et de conception de projet</h2>
                <p>Nous offrons des solutions personnalisées pour optimiser vos finances et réaliser vos projets avec succès. Contactez-nous dès aujourd'hui pour transformer vos idées en réalité rentable.</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email' />
                    <a href='/contact'> <Link to='/contact'><button className='btn'>Contact</button></Link></a>
                </div>
            </div>

        </div>
    </div>

        
    )
}

export default Featured
