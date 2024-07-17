import React from 'react';
import {Link, useLocation} from "react-router-dom";
import booksIcon from '../../../assets/icons/books.svg';
import authorsIcon from '../../../assets/icons/authors.svg';
import './nav-menu.css';
import Button from "../../common/button/button.jsx";
import {useDispatch} from "react-redux";
import {actions as uiActions} from "../../../store/uiSlice/ui-slice.js";

const NavMenu = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const handleOpenAddNewBookPopup = () => {
        dispatch(uiActions.setModalState(true));
    }

    return (
        <nav className="header__nav">
            {!location.pathname.includes('/book/') && !location.pathname.includes('/authors') && <div className="books-filter-actions__container">
                <Button label="Add New Book"
                        className="books-btn-filter__button button"
                        onClick={handleOpenAddNewBookPopup}
                />
                <Button label="Export All Books"
                        className="books-btn-filter__button button"
                />
            </div>}

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