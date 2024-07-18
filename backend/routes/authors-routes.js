import express from "express";
import {deleteAuthor} from "../controller/authors-controller.js";
const router = express.Router();

router.delete('/:authorName', deleteAuthor)

export {router};