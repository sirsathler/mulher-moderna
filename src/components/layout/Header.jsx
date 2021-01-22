import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Header = props => (
    <div className='main-header'>
        <div class='logo'>
            <img src={logo} />
            <li className='boutique'>boutique</li>
        </div>
        <nav class='head-menu'>
            <Link to="/">Home</Link>
            <Link to="/offers">Ofertas</Link>
            <Link to="/#">Catálogo</Link>
            <Link to="/#">Contato</Link>
        </nav>
    </div>
)

export default Header;