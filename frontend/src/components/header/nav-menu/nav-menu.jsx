import React from 'react';
import {Link} from "react-router-dom";
import booksIcon from '../../../assets/books.svg';
import authorsIcon from '../../../assets/authors.svg';

const NavMenu = () => {
    return (
        <nav className="header__nav">
            <ul className="nav-header__list">
                <li className="nav-header__item">
                    <Link to="/"
                          className="nav-header__inner">
                        <img src={booksIcon} alt="books"/>
                    </Link>
                </li>
                <li className="nav-header__item">
                    <Link to="/"
                          className="nav-header__inner">
                        <img src={authorsIcon} alt="authors"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavMenu;