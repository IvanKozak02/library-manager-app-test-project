import './books-cards.css';
import BookCard from "./book-card/book-card";
import {BOOKS_MOCKS} from "../../../assets/data/data.js";



const BooksCards = () => {
    return (
        <section className="books">
            <ul className="book-list">
                {BOOKS_MOCKS.map(book => <BookCard key={book.id} book={book}/>)}
            </ul>
        </section>
    );
};

export default BooksCards;