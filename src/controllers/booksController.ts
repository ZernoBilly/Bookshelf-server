import express, { Request, Response } from "express";
import mongoose from "mongoose";
import book from "../models/book";

import Book from "../models/book";

//Get all books
export const getBooks = async (req: Request, res: Response) => {
  const books = await Book.find();

  if (!book.length)
    res.status(204).json({
      message: "No books saved on database",
      data: books,
    });

  try {
    res.status(200).json({
      data: books,
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

//Create book
export const createBook = async (req: Request, res: Response) => {
  const { title, author, description } = req.body;

  const newBook = new Book({
    title,
    author,
    description,
  });

  try {
    await newBook.save();
    res.status(201).json({
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

//Update book
export const updateBook = async (req: Request, res: Response) => {
  const { id, title, author, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(405).json({ errors: { message: "Invalid Id" } });

  const updatedBook = {
    _id: id,
    title,
    author,
    description,
  };

  try {
    await Book.findByIdAndUpdate(id, updatedBook, { new: true });
    const books = await Book.find();
    res.status(200).json({
      message: "Book updated successfully",
      data: books,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

//Delete book
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(405).json({ errors: { message: "Invalid Id" } });

  try {
    await Book.findByIdAndDelete(id);
    const books = await Book.find();
    res.status(200).json({
      message: "Book deleted successfully",
      data: books,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
