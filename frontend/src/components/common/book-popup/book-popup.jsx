import './book-popup.css';
import Modal from "../../common/modal/modal";
import Input from "../../common/input/input";
import React, {useState} from "react";
import Button from "../../common/button/button";
import {useDispatch, useSelector} from "react-redux";
import {addNewBookToLibrary, editBookInLibrary} from "../../../store/book-slice/actions.js";
import {actions as uiActions} from "../../../store/uiSlice/ui-slice.js";
import {actions as bookActions} from "../../../store/book-slice/book-slice";

const BookPopup = ({book}) => {
    const [bookImage, setBookImage] = useState(null);
    const [formState, setFormState] = useState({
        title: book?.title || '',
        author: book?.author || '',
        genre: book?.genre || '',
        description: book?.description || '',
        rating: book?.rating || '',
    });
    const loader = useSelector(state => state.book.loader);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState(prevState => ({...prevState, [name]: value}))
    }

    const handleResetFormData = () => {         // todo RESET_FORM
        setFormState({
            title: '',
            author: '',
            genre: '',
            description: '',
            rating: '',
        });
    }

    const handleChangeImage = (e) => {
        setBookImage(e.target.files[0]);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(formState).some(key => key === '')) {
            alert('Fill all input fields!!!');
        }
        const formData = new FormData();
        formData.append('bookDetails', JSON.stringify(formState));
        formData.append('bookImage', bookImage);
        let res;
        if (!book) {
            res = await dispatch(addNewBookToLibrary(formData));
            if (res.type.includes('/fulfilled')) {
                dispatch(bookActions.addNewBook(res.payload));  // if add new book
                dispatch(uiActions.setModalState(false))
            } else {
                alert(res.error.message);
            }
        } else {
            res = await dispatch(editBookInLibrary(formData));
            if (res.type.includes('/fulfilled')) {
                dispatch(bookActions.editBook(res.payload));
                dispatch(uiActions.setModalState(false))
            } else {
                alert(res.error.message);
            }


        }
    }


    return (
        <Modal name="book-trip"
               onResetForm={!book ? handleResetFormData: null}
        >
            <form className="book-popup__form" autoComplete="off" onSubmit={handleFormSubmit}>
                <Input label="Title"
                       labelClasses="input"
                       name="title"
                       type="text"
                       value={formState.title}
                       onChange={handleChange}
                       required={true}
                />
                <Input label="Author"
                       name="author"
                       labelClasses="input"
                       type="text"
                       value={formState.author}
                       onChange={handleChange}
                       required={true}
                />
                <Input label="Genre"
                       labelClasses="input"
                       name="genre"
                       type="text"
                       value={formState.genre}
                       onChange={handleChange}
                       required={true}
                />
                <label className="input">
                    Description
                    <textarea name="description"
                              value={formState.description}
                              rows={6}
                              onChange={handleChange}
                              required={true}/>
                </label>
                <Input label="Rating"
                       labelClasses="input"
                       name="rating"
                       type="number"
                       value={formState.rating}
                       onChange={handleChange}
                       required={true}
                />
                <Input label="Image"
                       labelClasses="input"
                       name="guests"
                       type="file"
                       onChange={handleChangeImage}
                />
                <Button
                    label={loader && loader === 'pending' ? 'Saving changes...' : (book ? "Edit Book" : "Add New Book")}
                    className="button"
                />
            </form>
        </Modal>
    );
}


export default BookPopup;