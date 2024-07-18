import './book-card.css';
import {Link} from "react-router-dom";
import BookInfo from "../../../common/book-info/book-info";
import BookRating from "../../../common/book-rating/book-rating";
import defaultBookImage from '../../../../assets/default-book-image.png'


const BookCard = ({book}) => {
    const { id, title, author, genre, rating, imageUrl } = book;
    let image = imageUrl !== '' ? `http://localhost:3000/` + imageUrl : defaultBookImage;
    return (
        <li className="book-card">
            <div>
                <img src={image} alt="book photo"/>
            </div>
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