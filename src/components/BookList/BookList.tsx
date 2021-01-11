import React from "react";
import "./BookList.scss";
import Book from "../Book/Book";
import BookInterface from "../../interfaces/Book";

export interface allBooks {
  items?: BookInterface[];
}

const BookList = (books: allBooks) => { 
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
