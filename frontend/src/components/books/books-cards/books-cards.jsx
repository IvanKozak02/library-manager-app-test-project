import './books-cards.css';
import BookCard from "./book-card/book-card";
import {BOOKS_MOCKS} from "../../../assets/data/data.js";
import {useSelector} from "react-redux";



const BooksCards = () => {

    // const books = useSelector(state => state.book.books) || [];


    return (
        <section className="books">
            <ul className="book-list">
                {BOOKS_MOCKS.map(book => <BookCard key={book.id} book={book}/>)}
                {/*{books.map(book => <BookCard key={book.id} book={book}/>)}*/}
            </ul>
        </section>
    );
};

export default BooksCards;