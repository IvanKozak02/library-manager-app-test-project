import fs from "fs";
import {
    authorHasAnotherBooks,
    getBooksInfo,
    saveData
} from "../helper/controller-helper.js";

const getAllBooks = (req, res) => {
    const {books, authors} = JSON.parse(fs.readFileSync('./fakeDB/db.json', 'utf8'));
    return res.status(200).json({books, authors});

}

const addNewBook = (req, res) => {
    const {books, authors} = getBooksInfo();
    const bookDetails = JSON.parse(req.body.bookDetails);
    if (req.file) {
        bookDetails.imageUrl = req.file.filename;
    } else {
        bookDetails.imageUrl = '';
    }
    const id = crypto.randomUUID();
    const newBook = {id, ...bookDetails};
    if (!authors.includes(newBook.author)) {
        authors.push(newBook.author);
    }
    books.push(newBook);
    saveData({books, authors});
    return res.status(201).json({book: newBook, authors});
}


const updateBook = (req, res) => {
    let {books, authors} = getBooksInfo();
    const bookToUpdate = JSON.parse(req.body.bookDetails);
    const oldBookVersionIndex = books.findIndex(book => book.id === bookToUpdate.id);
    if (req.file) {
        bookToUpdate.imageUrl = req.file.filename;
        const oldImage = books[oldBookVersionIndex].imageUrl;
        fs.unlink(`uploads/${oldImage}`, (err) => {
            console.log(err);
        });
    } else {
        bookToUpdate.imageUrl = books[oldBookVersionIndex].imageUrl;
    }
    if (bookToUpdate.author !== books[oldBookVersionIndex].author) {
        if (!authorHasAnotherBooks(books, books[oldBookVersionIndex].author, oldBookVersionIndex)) {
            authors = authors.filter(author => author !== books[oldBookVersionIndex].author);
        }
        if (authors.indexOf(bookToUpdate.author) === -1) {
            authors.push(bookToUpdate.author);
        }
    }
    books[oldBookVersionIndex] = bookToUpdate;
    saveData({books, authors});
    return res.status(200).json({book: bookToUpdate, authors});
}

const deleteBook = (req, res) => {
    const {bookId} = req.params;
    let {books, authors} = getBooksInfo();
    const bookToDeleteIndex = books.findIndex(book => book.id === bookId);
    const bookToDelete = books[bookToDeleteIndex];
    fs.unlink(`uploads/${bookToDelete.imageUrl}`, (err) => {
        console.log(err);
    });
    if (!authorHasAnotherBooks(books, bookToDelete.author, bookToDeleteIndex)) {
        authors = authors.filter(author => author !== bookToDelete.author);
    }
    books = books.filter(book => book.id !== bookId);
    saveData({books, authors});
    return res.status(200).json({bookId, authors});
}

export {
    getAllBooks,
    addNewBook,
    updateBook,
    deleteBook
}