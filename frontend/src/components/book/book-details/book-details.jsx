import './book-details.css';
import BookInfo from "../../common/book-info/book-info";
import BookRating from "../../common/book-rating/book-rating";
import Button from '../../common/button/button';
import {actions as uiActions} from "../../../store/uiSlice/ui-slice.js";
import {actions as bookActions} from "../../../store/book-slice/book-slice";
import {useDispatch, useSelector} from "react-redux";
import {removeBookFromLibrary} from "../../../store/book-slice/actions.js";
import {useNavigate} from "react-router-dom";
import defaultBookImage from "../../../assets/default-book-image.png";

const BookDetails = ({book}) => {
    const {id,title, author, genre, imageUrl, description, rating} = book;
    let image = imageUrl !== '' ? `http://localhost:3000/` + imageUrl : defaultBookImage;

    const dispatch = useDispatch();
    const loader = useSelector(state => state.book.loader);
    const navigate = useNavigate();
    const handleOpenModal = () => {
        dispatch(uiActions.setModalState(true));
    }

    const handleRemoveBook = async (bookId) => {
        const res = await dispatch(removeBookFromLibrary(bookId))
        if(res.type.includes('/fulfilled')){
            dispatch(bookActions.removeBook(res.payload))
            navigate('/')
        }else {
            alert(res.error.message)
        }
    }

    return (
        <div className="book">
            <img src={image}
                 className="book__img"
                 alt="book photo"/>
            <div className="book__content">
                <BookInfo title={title} author={author} genre={genre}/>
                <div className="book__description">
                    {description}
                </div>
                <BookRating rating={rating}/>
                <div className="book-details__actions">
                    <Button className="book-details-action__button-edit button"
                            label="Edit Book"
                            onClick={handleOpenModal}
                    />
                    <Button onClick={()=>handleRemoveBook(id)}
                            className="book-details-action__button-delete button"
                            disabled={loader === 'pending'}
                            label={loader && loader === 'pending' ? 'Deleting book...' : "Delete Book"}/>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;