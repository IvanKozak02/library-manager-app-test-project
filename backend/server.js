import express from 'express';
import cors from 'cors';
import {router as bookRouter} from './routes/books-routes.js';
import {router as authorRouter} from './routes/authors-routes.js';
import notFound from "./middleware/not-found.middleware.js";
const app = express();


app.use(express.json());
app.use(cors());
app.use(express.static('./uploads'));

app.use('/books', bookRouter);
app.use('/authors', authorRouter);

app.use(notFound);


app.listen(3000, () => {
    console.log('SERVER STARTED ON 3000 PORT');
})




