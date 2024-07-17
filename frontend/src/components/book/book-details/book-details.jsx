import './book-details.css';
import BookInfo from "../../common/book-info/book-info";
import BookRating from "../../common/book-rating/book-rating";
import Button from '../../common/button/button';

const BookDetails = ({book}) => {
    const {title, author, genre, imageUrl, description, rating} = book;
    return (
        <div className="book">
            <img src={imageUrl}
                 className="book__img"
                 alt="book photo"/>
            <div className="book__content">
                <BookInfo title={title} author={author} genre={genre}/>
                <div className="book__description">
                    {description}
                </div>
                <BookRating rating={rating}/>
                <div className="book-details__actions">
                    <Button className="book-details-action__button-edit button" label="Edit Book"/>
                    <Button className="book-details-action__button-delete button" label="Delete Book"/>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;