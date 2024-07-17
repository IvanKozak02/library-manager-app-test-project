import React from 'react';
import BooksFilters from "../../components/books/book-filters/books-filters.jsx";
import BooksCards from "../../components/books/books-cards/books-cards.jsx";
import NewBookPopup from "../../components/books/new-book-popup/new-book-popup.jsx";
const BooksPage = () => {
    return (
        <main>
            <BooksFilters/>
            <BooksCards/>
            <NewBookPopup/>
        </main>
    );
};

export default BooksPage;