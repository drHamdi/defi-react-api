import React from 'react'
import { Link } from 'react-router-dom'
import './Nextser.css'
import presentation from '../assets/Services/s.presentation.jpg'
import comptabilité from '../assets/Services/s.comptabilité.png'
import fiscalité from '../assets/Services/s.fiscalité.png'
import juridique from '../assets/Services/s.juridique.png'
import administratif  from '../assets/Services/s.adminitratif.png'


const Nextserv = () => {
  return (
    <div className='driver' >
      <div className='left'>
        <img src={presentation} alt='presentation'/>
      </div>
      <div>
            <h2>Service Accompagnement et Conception de projet  <span> Votre Cabinet De Comptable</span></h2>
            <p>Notre cabinet de comptabilité propose un service d'accompagnement et de conception de projet, offrant une expertise financière et stratégique pour guider nos clients de l'idée à la réalisation. Nous fournissons une analyse financière approfondie, une gestion de projet rigoureuse et un soutien administratif complet, garantissant ainsi le succès et la conformité de chaque initiative entrepreneuriale.</p>
        </div>
        <div className='left'>
        <img src={comptabilité} alt='presentation'/>
      </div>
      <div>
            <h2>COMPTABILITÉ ET FINANCE : <span> NOUS SOMMES VOTRE PARTENAIRE</span></h2>
            <p>Vous cherchez un partenaire de confiance pour gérer vos finances ? Notre cabinet de comptabilité vous offre une gamme complète de services adaptés à vos besoins.
               Que ce soit la tenue de la comptabilité générale et analytique, la gestion des livres comptables légaux, ou l’établissement des états financiers, nous vous assurons une
                gestion rigoureuse et transparente. Profitez de notre expertise en assistance et supervision comptable, commissariat aux comptes, 
               et audits pour garantir la conformité de vos opérations. Nous élaborons également des business plans solides et vous assistons dans la préparation de vos dossiers de crédits bancaires.
                Faites confiance à notre expérience pour optimiser vos finances et sécuriser votre croissance.</p>
        </div>
        <div className='left'>
        <img src={fiscalité} alt='presentation'/>
      </div>
      <div>
            <h2>Service <span>fiscalité</span> </h2>
            <p className='pilote'>- Accompagnement des sociétés en matière de respect du Droit Fiscal Tunisien</p>
            <p className='pilote'>- Assistance en matière de respect des conventions fiscales internationales</p>
            <p className='pilote'>- Etablissement des diverses déclarations fiscales</p>
            <p className='pilote'>- Optimisation du résultat fiscal</p>
            <p className='pilote'>- Assistance en cas de contrôle de l’administration fiscale</p>
            <p className='pilote'>- Audit de la situation fiscale</p>
        </div>
        <div className='left'>
        <img src={juridique} alt='presentation'/>
      </div>
      <div>
            <h2>Services <span>Juridiques</span></h2>
            <p className='pilote'> - Accomplissement  des formalités de constitution de société auprès des différentes administrations</p>
            <p className='pilote'> - Accompagnement des sociétés étrangères en matière de respect des lois et réglementations Tunisiennes</p>
            <p className='pilote'> - Conseil en droit du travail et de la Sécurité Sociale</p>
            <p className='pilote'> - Rédaction des statuts, Procès Verbaux et autres actes et documents</p>
            <p className='pilote'> - Accomplissement des formalités légales relatives aux Assemblée Générales</p>
            <p className='pilote'> - Tenue des registres règlementaires</p>
            <p className='pilote'> - Formalités relatives à la Banque Centrale de Tunisie</p>
            <p className='pilote'> - Formalités relatives à la Douane Tunisienne</p>
        </div>
        <div className='left'>
        <img src={administratif} alt='presentation'/>
      </div>
      <div>
            <h2>Service <span>Administratif</span> </h2>
            <p className='pilote'>- Domiciliation</p>
            <p className='pilote'>- Etablissement des bulletins de paye</p>
            <p className='pilote'>- Etablissement des déclarations sociales</p>
            <p className='pilote'>- Aide au recrutement</p>
            <p className='pilote'>- Elaboration de contrats de travail</p>
            <p className='pilote'>- Assistance lors de contrôle d’inspection de travail ou de sécurité sociale</p>
            <p className='pilote'>- Obtention des attestations de travail pour les expatriés</p>
            
        </div>
                              
        <a href='/contact'> <Link to='/contact'><button className='btn'>Commencer</button></Link></a>
                 
    </div>
    
    
  )
}

export default Nextserv
