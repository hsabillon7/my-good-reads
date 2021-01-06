import React from "react";
import Book from "../Book/Book.js";

const BookList = ({ allAvailableBooks }) => {
  return allAvailableBooks.items ? (
    <div className="book-list-container">
      {allAvailableBooks.items.map((book) => (
        <div className="card" key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  ) : null;
};

export default BookList;
