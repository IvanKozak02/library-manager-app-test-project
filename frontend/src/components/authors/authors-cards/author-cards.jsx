import React, {useState} from 'react';

import AuthorCard from "../author-card/author-card.jsx";
import './author-cards.css';
import {useSelector} from "react-redux";
const AuthorCards = () => {

    // const authors = useSelector(state => state.book.authors);

    return (
        <section className="authors">
            <ul className="authors-list">
                <AuthorCard/>
                <AuthorCard/>
                <AuthorCard/>
                <AuthorCard/>
                <AuthorCard/>
                {/*{books.map(book => <BookCard key={book.id} book={book}/>)}*/}
            </ul>
        </section>
    );
};

export default AuthorCards;