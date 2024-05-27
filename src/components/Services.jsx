import React from 'react'
import { Link } from 'react-router-dom'
import './services.css'

const services = () => {
  return (
    <div className='pricing'>
    <div className='container'>
        <div className='top-content'>
            <div>
                <h2>Tout ce dont vous avez besoin pour <span>Nos services</span></h2>
                <h3> 1 - Comptabilité & Finance :  </h3>
            </div>
            <div className=''>
                
            </div>
        </div>
        <div className='bottom-content'>
            <div className=''>
                <p><span>Votre Demande et Besoin</span></p>
                <h3>C'est Notre Performance</h3>
                <p>Découvrez l'excellence avec notre cabinet de comptabilité, où précision et fiabilité sont au cœur de nos services.
                     Que vous soyez une PME ou une grande entreprise, nous vous offrons des solutions personnalisées pour optimiser votre fiscalité et simplifier votre gestion financière.
                      Faites confiance à nos experts pour piloter votre croissance en toute sérénité.</p>
            </div>
            <div>
                <div>
                    <p className='pilote'>Assistance et supervision comptable .</p>
                </div>
                <div>
                    <p className='pilote'>Audit et due diligence .</p>
                </div>
                <div>
                    <p className='pilote'>Assistance pour les dossiers de crédits bancaires.</p>
                </div>
                <div>
                    <p className='pilote'>Commissariat aux comptes.</p>
                </div>
                <div>
                    <p className='pilote'>Etablissement des états financiers.</p>
                </div>
            </div>
            <div>
                <div>
                    <p className='pilote'>Elaboration de Business plan.</p>
                </div>
                <div>
                    <p className='pilote'>Evaluation d’entreprises.</p>
                </div>
                <div>
                    <p className='pilote'>Fusion/Scission d’entreprises.</p>
                </div>
                <div>
                    <p className='pilote'>Organisation et mise en place de procédures.</p>
                </div>
                <div>
                    <p className='pilote'>Tenue de la comptabilité générale.</p>
                </div>
                <div>
                    <p className='pilote'>Tenue de la comptabilité analytique.</p>
                </div>
                <div>
                    <p className='pilote'>Tenue des livres comptables légaux.</p>
                </div>
            </div>
        </div>
        <a href='/contact'> <Link to='/contact'><button className='btn'>Commencer aujourd'hui</button></Link></a>
        
    </div>
    
</div>
)
}
  

export default services
