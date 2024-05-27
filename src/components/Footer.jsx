import React from 'react'
import {FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdCastForEducation } from "react-icons/md";
import logo from '../assets/logoo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>

                <div className='logo'>
                     <img src={logo} alt='logo' />
                </div>
                </div>
                <div className='col'>
                    <h5 className='pilote'>Support</h5>
                    <span className='bar'></span>
                        <a className='pilote' href='/'>Contacter-Nous</a>
                        <a className='pilote' href='/'>+216 56 442 840</a>
                        

                </div>
                <div className='col'>
                    <h5 className='pilote'>Formation</h5>
                    <span className='bar'> </span>
                        <a className='pilote' href='/'>CONCEPTION ET CRÉATION D'UN ENTREPRISE</a>
                        <a className='pilote' href='/'>COMPTABILITÉ GÉNÉRALE</a>
                        <a className='pilote' href='/'>GRAPHIC DESIGN</a>
                        <a className='pilote' href='/'>ASSISTANCE DE DIRECTION</a>
                   
                </div>
                <div className='col'>
                    <h5 className='pilote'>Services</h5>
                    <span className='bar'> </span>
                        <a className='pilote' href='/'>Assistance et supervision comptable </a>
                        <a className='pilote' href='/'>Audit et due diligence </a>
                        <a className='pilote' href='/'>Assistance pour les dossiers de crédits bancairesl</a>
                        <a className='pilote' href='/'>Commissariat aux comptes</a>
                </div>
                <div className='col'>
                    <h5 className='pilote'>Social</h5>
                    <span className='bar'> </span>
                        <a className='pilote' target='blank' href='https://www.facebook.com/Khedhriconsulting'><FaFacebook className='icon'/></a>
                        <a className='pilote' target='blank' href='https://www.instagram.com/khconsulting_agency/'><FaInstagram  className='icon'/></a>
                        <a className='pilote' target='blank' href='https://www.facebook.com/profile.php?id=61559440568873'><MdCastForEducation  className='icon'/></a>
                        
                </div>
            </div>
            
        </div>
    )
}

export default Footer
