import React from 'react';

import AuthorCard from "../author-card/author-card.jsx";
import './author-cards.css';
import {useSelector} from "react-redux";
import NotFoundData from "../../common/not-found-data/not-found-data.jsx";

const getNumberOfBooks = (books,author) => {
    let numberOfBooks = 0;
    books.forEach(book=>{
        if (book.author === author){
            numberOfBooks++;
        }
    })
    return numberOfBooks;
}

const AuthorCards = () => {

    const books = useSelector(state => state.book.books);
    const authors = useSelector(state => state.book.authors);

    return (
        <section className={authors.length > 0 ? "authors" : ''}>
            {authors.length > 0 ? <ul className="authors-list">
                {authors.map(author => <AuthorCard name={author} numberOfBooks={getNumberOfBooks(books, author)}/>)}
            </ul> : <NotFoundData/>}

        </section>
    );
};

export default AuthorCards;