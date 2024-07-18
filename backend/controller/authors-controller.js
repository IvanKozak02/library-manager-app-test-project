import fs from "fs";
import {getBooksInfo, saveData} from "../helper/controller-helper.js";

const deleteAuthor = (req, res) => {
    const {authorName} = req.params;
    let {books, authors} = getBooksInfo();
    books = books.filter(book => {
        if (book.author === authorName) {
            fs.unlink(`uploads/${book.imageUrl}`, (err) => {
                console.log(err);
            });
            return false;
        }
        return true;
    });
    authors = authors.filter(author => author !== authorName);
    saveData({books, authors});
    return res.status(200).json({books, authors});
}

export {deleteAuthor};