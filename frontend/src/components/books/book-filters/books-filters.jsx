import React from 'react';
import Input from "../../common/input/input.jsx";
import './books-filters.css';
const BooksFilters = () => {

    return (
        <section className="books-filter">
            <form className="books-filter__form" autoComplete="off">
                <Input labelClasses="books-title-filter__search input"
                       name="title"
                       type="search"
                       placeholder="search by book title"/>
                <Input labelClasses="books-author-filter__search input"
                       name="author"
                       type="search"
                       placeholder="search by book author"/>
            </form>
        </section>
    );
};

export default BooksFilters;