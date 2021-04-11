import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <a href="index.html"><img src="/img/logo-iker.svg"/></a>
        </div>
        <div className="header__menu">
            <div className="header__menu--not-dropdown">
                <img src="/img/user.svg" alt=""/>
                <span>Perfil</span>
            </div>
            <div className="header__menu--dropdown">
                <ul>
                    <a href="login.html"><li>Cuenta</li></a>
                    <a href="#"><li>Peliculas</li></a>
                    <a href="#"><li>Series</li></a>
                </ul>
            </div>
        </div>       
    </header>
)

export default Header