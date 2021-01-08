import React from "react";
import "./BookList.scss";
import Book from "../Book/Book";

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
