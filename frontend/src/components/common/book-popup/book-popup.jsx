import './book-popup.css';
import Modal from "../../common/modal/modal";
import Input from "../../common/input/input";
import React, {useState} from "react";
import Button from "../../common/button/button";

const BookPopup = ({book}) => {
    const [bookImage, setBookImage] = useState(null);
    const [formState, setFormState] = useState({
        title: book.title || '',
        author: book.author || '',
        genre: book.genre || '',
        description: book.description || '',
        rating: book.rating || '',
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState(prevState => ({...prevState, [name]: value}))
    }

    const handleResetFormData = () => {
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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('bookDetails', JSON.stringify(formData));
        formData.append('bookImage', bookImage);
        console.log(formData.get('bookImage'));
        // todo async thunk add new book to the server
        // dispatch(bookActions.addNewBook());

    }


    return (
        <Modal name="book-trip"
               isOpen={true}>
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
                       required={true}
                />
                <Button label={book ? "Add New Book" : "Edit Book"}
                        className="button"
                        type="submit"
                />
            </form>
        </Modal>
    );
}


export default BookPopup;