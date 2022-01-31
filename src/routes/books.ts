import express from "express";

const router = express.Router();

import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController";

router.get("/", getBooks);
router.post("/", createBook);
router.patch("/", updateBook);
router.delete("/", deleteBook);

export default router;
