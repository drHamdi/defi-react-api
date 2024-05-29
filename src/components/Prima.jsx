import React from 'react'
import logocompta from '../assets/logocomta.png'


import './Prima.css'


const Prima = () => {
  return (
    <div className='testimonials' id='testimonials'>
    <div className='container'>
        <h2 className='pilote'>SERVICE DE COMPTABILITÉ ET FISCALITÉ ET FORMATION</h2>
        <span className='line'></span>
        <div className='content'>
            <div className='card pilote'>
                 
                <p className='pilote'>La comptabilité est la discipline qui consiste à enregistrer, classer et résumer les transactions financières d'une entreprise ou d'une organisation. Elle permet de suivre l'évolution des finances,
                     de contrôler les coûts et de préparer des rapports financiers.
                     </p>
                <p className='pilote'><span>Service Comptabilité</span></p>
                
            </div>
            <div className='card pilote'>
                 
                <p className='pilote'>La fiscalité, quant à elle, concerne les règles et les lois relatives à l'imposition des revenus, des bénéfices et des biens. 
                    Les professionnels de la fiscalité aident les entreprises et les particuliers à comprendre et à se conformer aux obligations fiscales</p>
                <p className='pilote'><span className='pilote'>Service Fiscalité</span></p>
                
            </div>
            <div className='card pilote'>
              
                 
                <p className='pilote'>La formation en comptabilité et fiscalité est essentielle pour acquérir les compétences nécessaires dans ces domaines complexes et en constante évolution. 
                    Elle inclut des études théoriques et pratiques sur les principes comptables, les normes fiscales et les logiciels spécialisés</p>
                <p className='pilote'><span className='pilote'>Nos Formations</span></p>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default Prima
