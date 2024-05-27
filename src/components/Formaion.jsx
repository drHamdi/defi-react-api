import React from 'react'
import { Link } from 'react-router-dom'
import './Formation.css'
import fcompta from '../assets/comptabilitée.jpg'
import fconception from '../assets/conception.jpg'
import fcréation from '../assets/création dentreprise.jpg'
import fdesign from '../assets/desing graphic.jpg'
import fassitance from '../assets/fassistance.jpg'

const Formaion = () => {
  return (
    <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p className='pilote'>Maîtriser la comptabilité avancée est un atout stratégique</p>
                    <h1 className='pilote'>COMPTABILITÉ AVANCÉ</h1>
                    <p className='pilote'>Optimisez la gestion financière de votre entreprise avec notre formation en comptabilité avancée. 
                                           Maîtrisez l'analyse des données complexes, la préparation de rapports financiers détaillés et l'application des normes comptables internationales. 
                                           En acquérant ces compétences avancées, vous renforcerez la prise de décision stratégique et augmenterez la rentabilité de votre entreprise.
                                              Inscrivez-vous dès aujourd'hui pour faire de la comptabilité avancée un levier de succès commercial.</p>
                   
                    <div className='input-container'>
                        
                    <a href='/contact'> <Link to='/contact'><button className='btn'>Commencer</button></Link></a>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={fcompta} alt=''/>
                    </div>
                </div>
            </div>


            <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p className='pilote'>Lancer et développer votre propre entreprise peut sembler un défi de taille</p>
                    <h1 className='pilote'>CONCEPTION ET CRÉATION D'UN ENTREPRISE</h1>
                    <p className='pilote'>Transformez vos idées en succès entrepreneurial avec notre formation en conception et création d'entreprise.
                                           Apprenez à élaborer un business plan solide, à trouver des financements et à développer des stratégies de croissance efficaces.
                                        Cette formation vous donnera les outils nécessaires pour minimiser les risques et maximiser la rentabilité de votre future entreprise.
                                            Inscrivez-vous dès aujourd'hui et prenez le contrôle de votre avenir professionnel en lançant une entreprise prospère.</p>
                   
                    <div className='input-container'>
                        
                    <a href='/contact'> <Link to='/contact'><button className='btn'>Commencer</button></Link></a>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={fconception} alt=''/>
                    </div>
                </div>
            </div>
        </div>
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p className='pilote'>Acquérir une maîtrise solide de la comptabilité générale est essentiel</p>
                    <h1 className='pilote'>COMPTABILITÉ GÉNÉRALE</h1>
                    <p className='pilote'>Boostez la gestion financière de votre entreprise avec notre formation en comptabilité générale.
                     Apprenez à gérer efficacement les transactions, préparer des états financiers précis et garantir la conformité aux normes comptables. 
                     En maîtrisant ces compétences essentielles, vous optimiserez les performances financières et renforcerez la rentabilité de votre entreprise.
                     Inscrivez-vous dès aujourd'hui pour transformer la comptabilité en un véritable atout commercial.</p>
                   
                    <div className='input-container'>
                        
                    <a href='/contact'> <Link to='/contact'><button className='btn'>Commencer</button></Link></a>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={fcréation} alt=''/>
                    </div>
                </div>
            </div>
        </div>
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p className='pilote'>Plongez dans l'univers créatif du design graphique avec notre formation spécialisée</p>
                    <h1 className='pilote'>GRAPHIC DESIGN</h1>
                    <p className='pilote'>
                                          Développez votre créativité et boostez votre carrière avec notre formation en design graphique. Apprenez à créer des visuels captivants qui renforceront 
                                           l’identité de votre marque et attireront plus de clients. En maîtrisant les outils et techniques du design, vous pourrez transformer vos idées en atouts commerciaux puissants, 
                                               augmentant ainsi la visibilité et le succès de votre entreprise. 
                                                   Inscrivez-vous dès aujourd’hui et faites du design graphique un levier de croissance pour votre entreprise.</p>
                   
                    <div className='input-container'>
                        
                    <a href='/contact'> <Link to='/contact'><button className='btn'>Commencer</button></Link></a>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={fdesign} alt=''/>
                    </div>
                </div>
            </div>
        </div>
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p className='pilote'>Optimisez vos compétences organisationnelles et devenez un pilier essentiel de toute entreprise grâce à notre formation en assistance de direction</p>
                    <h1 className='pilote'>ASSISTANCE DE DIRECTION</h1>
                    <p className='pilote'>Apprenez à gérer efficacement les tâches administratives, à coordonner les agendas et à faciliter la communication interne, 
                    tout en apportant une valeur ajoutée stratégique. Investir dans cette formation, c’est garantir une gestion fluide et productive de vos opérations quotidiennes, 
                    augmentant ainsi l'efficacité globale et le succès commercial de votre entreprise.
                     Rejoignez-nous dès aujourd'hui et devenez l'assistant de direction indispensable que recherchent les entreprises prospères.</p>
                   
                    <div className='input-container'>
                        
                    <a href='/contact'> <Link to='/contact'><button className='btn'>Commencer</button></Link></a>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={fassitance} alt=''/>
                    </div>
                </div>
            </div>
        </div>
        </div>



  )
}

export default Formaion

