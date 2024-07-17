import React from 'react';
import Button from "../../common/button/button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {removeAuthorFromLibrary} from "../../../store/book-slice/actions.js";
import {actions as bookActions} from "../../../store/book-slice/book-slice.js";
import './author-card.css'

const AuthorCard = ({name, numberOfBooks}) => {

    const dispatch = useDispatch();
    const loader = useSelector(state => state.loader);

    const handleRemoveAuthor = (authorName) => {
        // dispatch(removeAuthorFromLibrary(authorName));
        const res = dispatch(removeAuthorFromLibrary(authorName));
        if (res.type.includes('/fulfilled')){
            dispatch(bookActions.removeAuthor(res.payload));
        }
    }


    return (
        <div className="author-card__container">
            <h1>Dan Brown</h1>
            <p>Number of books in library - 10</p>
            <Button onClick={()=>handleRemoveAuthor(name)}
                    className="book-details-action__button-delete button"
                    label={loader && loader === 'pending' ? 'Deleting Author...' : "Delete Author"}/>
        </div>
    );
};

export default AuthorCard;