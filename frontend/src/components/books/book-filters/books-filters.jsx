import React, {useEffect, useState} from 'react';
import Input from "../../common/input/input.jsx";
import './books-filters.css';
import {useDispatch} from "react-redux";
import {actions as filterActions} from "../../../store/book-filter-slice/book-filter-sclice.js";

const BooksFilters = ({onBookFilter}) => {

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (name === 'title'){
            dispatch(filterActions.setTitle(value));
        }else {
            dispatch(filterActions.setAuthor(value));
        }
    }

    return (
        <section className="books-filter">
            <form className="books-filter__form" autoComplete="off">
                <Input labelClasses="books-title-filter__search input"
                       name="title"
                       type="search"
                       placeholder="search by book title"
                       onChange={handleInputChange}
                       />
                <Input labelClasses="books-author-filter__search input"
                       name="author"
                       type="search"
                       placeholder="search by book author"
                       onChange={handleInputChange}
                       />
            </form>
        </section>
    );
};

export default BooksFilters;