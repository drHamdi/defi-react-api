import React from 'react'
import { Link } from 'react-router-dom'



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
                          <a href='/contact'> <Link to='/contact'><button className='btn'>Contactez-Nous</button></Link></a>
                </div>

                {/* Right */}

                
            </div>

        </div>
    )
}

export default Featured
