import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'


const Header = props => (
    <div className='main-header'>
        <div class='logo'>
            <img src={logo} />
            <li className='boutique'>boutique</li>
        </div>
        <nav class='head-menu'>
            <a href='/home'>Home</a>
            <a href='/offers'>Ofertas</a>
            <a href='#'>Catálogo</a>
            <a href='#'>Contato</a>
        </nav>
    </div>
)

export default Header;