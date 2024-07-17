import './book-details.css';
import BookInfo from "../../common/book-info/book-info";
import BookRating from "../../common/book-rating/book-rating";
import Button from '../../common/button/button';
import {actions as uiActions} from "../../../store/uiSlice/ui-slice.js";
import {actions as bookActions} from "../../../store/book-slice/book-slice";
import {useDispatch, useSelector} from "react-redux";
import {removeBookFromLibrary} from "../../../store/book-slice/actions.js";
import {useNavigate} from "react-router-dom";

const BookDetails = ({book}) => {
    const {id,title, author, genre, imageUrl, description, rating} = book;

    const dispatch = useDispatch();
    const loader = useSelector(state => state.book.loader);
    const navigate = useNavigate();
    const handleOpenModal = () => {
        dispatch(uiActions.setModalState(true));
    }

    const handleRemoveBook = async (bookId) => {
        const res = await dispatch(removeBookFromLibrary(bookId))
        if(res.type.includes('/fulfilled')){
            dispatch(bookActions.removeBook(bookId))
            navigate('/')
        }else {
            alert(res.error.message)
        }
    }

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
                    <Button className="book-details-action__button-edit button"
                            label="Edit Book"
                            onClick={handleOpenModal}
                    />
                    <Button onClick={()=>handleRemoveBook(id)}
                            className="book-details-action__button-delete button"
                            label={loader && loader === 'pending' ? 'Deleting book...' : "Delete Book"}/>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;