import React from 'react';
import BookDetails from "../../components/book/book-details/book-details.jsx";
import {useParams} from "react-router-dom";
import BookPopup from "../../components/common/book-popup/book-popup.jsx";
import {useSelector} from "react-redux";

const BookDetailsPage = () => {

    const {bookId} = useParams();
    const books = useSelector(state => state.book.books);         // UNCOMMENT WHEN SERVER WILL WORK
    let book;
    if (books){
        book = books.find(book => book.id === bookId);
    }

    return <>
        {book && <section style={{padding: '60px 20px'}}>
            <BookDetails book={book}/>
            <BookPopup book={book}/>
        </section>}

    </>
};

export default BookDetailsPage;