import React from 'react';
import {Link} from "react-router-dom";
import booksIcon from '../../../assets/books.svg';
import authorsIcon from '../../../assets/authors.svg';
import './nav-menu.css';
const NavMenu = () => {
    return (
        <nav className="header__nav">
            <ul className="nav-header__list">
                <li className="nav-header__item">
                    <Link to="/"
                          title="Books"
                          className="nav-header__inner">
                        <img width={24} height={24} src={booksIcon} alt="books"/>
                    </Link>
                </li>
                <li className="nav-header__item">
                    <Link to="/authors"
                          title="Authors"
                          className="nav-header__inner">
                        <img width={24} height={24} src={authorsIcon} alt="authors"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavMenu;