import express from "express";
import {
    getAllBooks,
    addNewBook,
    updateBook,
    deleteBook
} from "../controller/books-controller.js";
import {upload} from "../middleware/file-uploader-middleware.js";
const router = express.Router();

router.get('/', getAllBooks);
router.post('/', upload.single('bookImage'), addNewBook);
router.put('/', upload.single('bookImage'), updateBook);
router.delete('/:bookId', deleteBook);

export {router};