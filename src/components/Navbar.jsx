import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logoo.png'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <div className='logo'>
                     <img className='pilote' src={logo} alt='logo' />
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'><Link to='/'></Link> Acceuil</a>
                    </li>
                    <li>
                        <a href='/services'><Link to="/services"></Link>Service</a>
                    </li>
                    <li>
                        <a href='/formation'><Link to="/formation" ></Link> Formation</a>
                    </li>
                    <li>
                        <a href='/contact'> <Link to='/contact'></Link> Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                <a href='/contact'> <Link to='/contact'><button className='btn'>Consultation Gratuit</button></Link></a>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar