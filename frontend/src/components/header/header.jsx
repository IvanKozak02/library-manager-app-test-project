import React from 'react';
import Logo from "./logo/logo.jsx";
import NavMenu from "./nav-menu/nav-menu.jsx";
import './header.css'
const Header = () => {

    return (
        <header className="header">
            <div className="header__inner">
                <Logo/>
                <NavMenu/>
            </div>
        </header>
    );
};

export default Header;