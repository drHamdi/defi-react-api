import React from 'react'
import './About.css'
import { MdOutlineContactPhone } from "react-icons/md";




const About = () => {
  return (
    <div name='support' class='support'>
    <div class='overlay'>
        
    </div>
    
    <div class='content'>
        <div class='text-container'>
            <h2 class='section-title pilote'>Support</h2>
            <h3 class='section-subtitle pilote'>Trouver la bonne équipe</h3>
            <p class='section-text pilote'>Rejoignez-nous et trouvez la bonne équipe pour atteindre vos objectifs! Avec notre réseau dynamique de professionnels passionnés,
            bénéficiez d'un soutien inégalé, d'opportunités de croissance et de succès partagé. <span className='mobileprim'> Ne manquez pas cette chance de faire partie d'une communauté qui valorise votre potentiel 
            et stimule votre progression. Ensemble, nous réussirons!</span> </p>
        </div>

        <div class='card-grid'>
            <div class='card'>
                <div class='card-content'>
                    <div class='icon sales-icon'></div>
                    <h3 class='card-title pilote'>Service Comptabilité et Fiscalité</h3>
                    <p class='pilote'> - Assure le suivi des opérations comptables quotidiennes.</p>
                    <p class='pilote'> - Prépare et analyse les états financiers mensuels, trimestriels et annuels.</p>
                    <p class='pilote'> - Gère les déclarations fiscales et s'assure de la conformité avec les régulations en vigueur.</p>
                    <p class='pilote'> - Optimise les processus comptables pour une meilleure efficacité et précision.</p>
                    <p class='pilote'> - Fournit des conseils fiscaux pour minimiser les charges et maximiser les avantages fiscaux.</p>
                    <p class='pilote'> - Surveille les évolutions législatives et réglementaires en matière de comptabilité et de fiscalité.</p>
                    <p class='pilote'> - Collabore avec les auditeurs internes et externes pour les contrôles financiers.</p>
                    <p class='pilote'> - Élabore des rapports financiers pour la direction et les parties prenantes.</p>
                </div>
                
            </div>
            <div class='card'>
                <div class='card-content'>
                    <div class='icon support-icon'></div>
                    <h3 class='card-title pilote'> Administratif et Juridique</h3>
                    <p class='pilote'> - Gère les documents administratifs et contractuels.</p>
                    <p class='pilote'> - Assure la conformité légale des activités de l'entreprise.</p>
                    <p class='pilote'> - Fournit des conseils juridiques aux différentes divisions de l'entreprise.</p>
                    <p class='pilote'> - Supervise les litiges et les procédures judiciaires.</p>
                    <p class='pilote'> - Rédige et révise les contrats et accords.</p>
                    <p class='pilote'> - Surveille les évolutions législatives pertinentes.</p>
                    <p class='pilote'> - Maintient les archives légales et administratives.</p>
                    <p class='pilote'> - Coordonne avec les cabinets d'avocats externes en cas de besoin.</p>
                </div>
                
            </div>
            <div class='card'>
                <div class='card-content'>
                    
                    <h3 class='card-title pilote'>Formation</h3>
                    <div className='formation'>
                    <h5 className='pilote'> - Conception et Création d'un Entreprise </h5>
                    </div>
                    <div className='formation'>
                    <h5 className='pilote'> - Comptabilité </h5>
                    </div>
                    <div className='formation'>
                    <h5 className='pilote'> - Ressources Humains</h5>
                    </div>
                    <div className='formation'>
                    <h5 className='pilote'> - Éxcel Avancé</h5>
                    </div>
                    <div className='formation'>
                    <h5 className='pilote'> - Graphic Design</h5>
                    </div>
                    <div className='formation'>
                    <h5 className='pilote'> - Assitance De Direction</h5>
                    </div>

                    
                    

                </div>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default About
