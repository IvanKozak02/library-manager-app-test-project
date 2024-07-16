import './book-info.css'


const BookInfo = ({title, author, genre}) => {
    return (
        <div className="book-info">
            <h3 className="book-info__title">
                {title}
            </h3>
            <div className="book-info__content">
              <span className="book-info__author">
                <strong>Author - </strong>{author}
              </span>
                <span className="book-info__genre">
                <strong>Genre - </strong>{genre}
              </span>
            </div>
        </div>
    );
};

export default BookInfo;