import React from "react";
import "./BookList.scss";
import Book from "../Book/Book";
import BookListInterface from "../../interfaces/BookList";
import BookInterface from "../../interfaces/Book";

const BookList = (books: BookListInterface) => { 
  return books.items?.length ? (
    <div className="book-list-container">
      {books.items.map((book: BookInterface) => (
        <div className="card" key={book.id}>
          <Book {...book} />
        </div>
      ))}
    </div>
  ) : null;
};

export default BookList;
