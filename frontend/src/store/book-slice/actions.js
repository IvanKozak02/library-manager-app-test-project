import {createAsyncThunk} from "@reduxjs/toolkit";
import {httpRequest} from "../../common/helpers/http-helper.js";

export const addNewBookToLibrary = createAsyncThunk(
    'book/add-new-book-to-library',
    async function(book) {
        const url = '/books';
        const method = 'POST';
        return await httpRequest(url, method, book);
    }
);


export const editBookInLibrary = createAsyncThunk(
    'book/edit-book-in-library',
    async function(book){
        const url = '/books';
        const method = 'PUT';
        return await httpRequest(url, method, book);
    }
)

export const removeBookFromLibrary = createAsyncThunk(
    'book/remove-book-from-library',
    async function(bookId){
        const url = `/books/:${bookId}`;
        const method = 'DELETE';
        return await httpRequest(url, method);
    }
)