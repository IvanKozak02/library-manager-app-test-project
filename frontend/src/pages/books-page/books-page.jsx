import React from 'react';
import BooksFilters from "../../components/books/book-filters/books-filters.jsx";
import BooksCards from "../../components/books/books-cards/books-cards.jsx";
const BooksPage = () => {
    return (
        <main>
            <BooksFilters/>
            <BooksCards/>
        </main>
    );
};

export default BooksPage;