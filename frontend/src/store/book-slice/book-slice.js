import {createSlice} from "@reduxjs/toolkit";
import {addNewBookToLibrary, editBookInLibrary, removeBookFromLibrary} from "./actions.js";

const initialBookState = {
    books: [],
    authors: [],
    loader: ''
}

const setLoaderStatus = (state, status) =>{
    state.loader = status;

}

const bookSlice = createSlice({
    name: 'book',
    initialState: initialBookState,
    reducers: {
        addNewBook(state, action){
            state.books.push(action.payload);
            state.authors = action.payload.authors;
        },
        editBook(state, action){
            const updatedBook = action.payload.book;
            const bookIndex = state.books.findIndex(book => book.id === action.payload.book.id);
            state.books[bookIndex] = updatedBook;
            // if (action.payload.author){
            //     const updatedAuthor = action.payload.author;
            //     const authorIndex = state.book.author.indexOf(updatedAuthor);
            //     state.book.author[authorIndex] = updatedAuthor;
            // }
            state.authors = action.payload.authors;

        },
        removeBook(state, action){
            state.books = state.books.filter(book => book.id !== action.payload.bookId);
            state.authors = action.payload.authors;

        },

    },
    extraReducers: (builder)=>{
        builder
            .addCase(addNewBookToLibrary.pending, (state, _)=> setLoaderStatus(state, 'pending'))
            .addCase(addNewBookToLibrary.fulfilled, (state)=>setLoaderStatus(state,'idle'))
            .addCase(addNewBookToLibrary.rejected, (state)=> setLoaderStatus(state, 'idle'))
            .addCase(editBookInLibrary.pending, (state)=> setLoaderStatus(state, 'pending'))
            .addCase(editBookInLibrary.fulfilled, (state)=>setLoaderStatus(state,'idle'))
            .addCase(editBookInLibrary.rejected, (state)=> setLoaderStatus(state, 'idle'))
            .addCase(removeBookFromLibrary.pending, (state)=> setLoaderStatus(state, 'pending'))
            .addCase(removeBookFromLibrary.fulfilled, (state)=>setLoaderStatus(state,'idle'))
            .addCase(removeBookFromLibrary.rejected, (state)=> setLoaderStatus(state, 'idle'))
    }
});


export const reducer = bookSlice.reducer;
export const actions = bookSlice.actions;