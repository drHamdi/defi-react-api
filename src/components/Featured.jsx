import React from 'react'
import busnis from '../assets/Services/s.busnis.jpg'
import consulting from '../assets/Services/s.consulting.jpg'
import entre from '../assets/Services/s.entre.jpg'
import maleya from '../assets/Services/s.maleya.jpg'
import plan from '../assets/Services/s.plan.jpg'
import presentation from '../assets/Services/s.presentation.jpg'


import './Featured.css'

const Featured = () => {


    // console.log(data)

   

    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Votre avenir entrepreneurial</h2>
                    <p>L'esprit entrepreneurial, consiste à identifier des opportunités de marché et à transformer des idées innovantes en entreprises rentables.
                         Les entrepreneurs commerciaux se concentrent sur la satisfaction des besoins des clients tout en maximisant les profits. Leur capacité à élaborer des stratégies de
                          vente efficaces et à s'adapter aux dynamiques du marché est cruciale pour leur succès.</p>
                    <button className='btn'>Contact</button>
                </div>

                {/* Right */}

                
            </div>

        </div>
    )
}

export default Featured
