import React from 'react';
import BookDetails from "../../components/book/book-details/book-details.jsx";
import {useParams} from "react-router-dom";
import {BOOKS_MOCKS} from "../../assets/data/data.js";
import BookPopup from "../../components/common/book-popup/book-popup.jsx";

const BookDetailsPage = () => {

    const {bookId} = useParams();
    const book = BOOKS_MOCKS.find(book => book.id === bookId);

    return <>
        <BookDetails book={book}/>
        <BookPopup book={book}/>
    </>
};

export default BookDetailsPage;