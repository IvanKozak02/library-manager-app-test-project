import './book-rating.css';

const BookRating = ({rating}) => {
    return (
        <div className="book-rating">
            <span>Rating</span>
            <strong className="book-rating__value">
                {rating}
            </strong>
        </div>
    );
};

export default BookRating;