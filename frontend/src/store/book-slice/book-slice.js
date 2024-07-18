import {createSlice} from "@reduxjs/toolkit";
import {
    addNewBookToLibrary,
    editBookInLibrary,
    fetchAllBooks,
    removeAuthorFromLibrary,
    removeBookFromLibrary
} from "./actions.js";

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
            state.books.push(action.payload.book);
            state.authors = action.payload.authors;
        },
        editBook(state, action){
            const updatedBook = action.payload.book;
            const bookIndex = state.books.findIndex(book => book.id === action.payload.book.id);
            state.books[bookIndex] = updatedBook;
            state.authors = action.payload.authors;

        },
        removeBook(state, action){
            state.books = state.books.filter(book => book.id !== action.payload.bookId);
            state.authors = action.payload.authors;

        },
        removeAuthor(state, action){
            state.books = action.payload.books;
            state.authors = action.payload.authors;
        },
        addBooks(state, action){
            state.books = action.payload.books;
            state.authors = action.payload.authors;
        }

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
            .addCase(removeAuthorFromLibrary.pending, (state)=>setLoaderStatus(state,'pending'))
            .addCase(removeAuthorFromLibrary.fulfilled, (state)=> setLoaderStatus(state, 'idle'))
            .addCase(removeAuthorFromLibrary.rejected, (state)=> setLoaderStatus(state, 'idle'))
            .addCase(fetchAllBooks.pending, (state)=>setLoaderStatus(state,'pending'))
            .addCase(fetchAllBooks.fulfilled, (state)=> setLoaderStatus(state, 'idle'))
            .addCase(fetchAllBooks.rejected, (state)=> setLoaderStatus(state, 'idle'))
    }
});


export const reducer = bookSlice.reducer;
export const actions = bookSlice.actions;