import './book-card.css';
import {Link} from "react-router-dom";
import BookInfo from "../../../common/book-info/book-info";
import BookRating from "../../../common/book-rating/book-rating";



const BookCard = ({book}) => {
    const { id, title, author, genre, rating, imageUrl } = book;
    return (
        <li className="book-card">
            <img src={imageUrl} alt="book photo"/>
            <div className="book-card__content">
                <BookInfo title={title} author={author} genre={genre}/>
                <BookRating mode="card" rating={rating}/>
            </div>
            <Link to={`./book/${id}`} className="button">
                Discover a book
            </Link>
        </li>
    );
};

export default BookCard;