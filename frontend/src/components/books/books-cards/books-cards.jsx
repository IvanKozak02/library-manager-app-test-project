import './books-cards.css';
import BookCard from "./book-card/book-card";
import {useSelector} from "react-redux";
import NotFoundData from "../../common/not-found-data/not-found-data.jsx";


const BooksCards = () => {

    const books = useSelector(state => state.book.books) || [];
    const title = useSelector(state => state.bookFilters.title);
    const author = useSelector(state => state.bookFilters.author);
    let filteredBooks = books;
    if (title){
        filteredBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
    }
    if (author){
        filteredBooks = books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()))
    }

    return (
        <section className={filteredBooks.length !== 0 ? "books": ""}>
            {filteredBooks.length !== 0 ? <ul className="book-list">
                {filteredBooks.map(book => <BookCard key={book.id} book={book}/>)}
            </ul>: <NotFoundData/>
            }

        </section>
    );
};

export default BooksCards;