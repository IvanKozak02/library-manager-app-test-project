import fs from "fs";

const getBooksInfo = () => {
    const {books, authors} = JSON.parse(fs.readFileSync('./fakeDB/db.json', 'utf8'))
    return {books, authors};
}

const saveData = (data) => {
    fs.writeFileSync('./fakeDB/db.json', JSON.stringify(data), 'utf8')
}

const authorHasAnotherBooks = (books, authorName, updateBookIndex) => {
    return books.some((book, index) => {
        if (index === updateBookIndex) {
            return false;
        } else {
            return book.author === authorName;
        }
    })
}

export {
    authorHasAnotherBooks,
    saveData,
    getBooksInfo
}