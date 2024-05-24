import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logoo.png'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
              <div className='logo'>
                  <img src={logo} />
                </div> 
                    
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Acceuil</a>
                    </li>
                    <li>
                        <a href='/'>Service</a>
                    </li>
                    <li>
                        <a href='/'>Formation</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='button'>
                <div className='btn-group'>
                    <button className='btn'>Consultation Gratuit</button>
                </div>
                </div>
               
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
