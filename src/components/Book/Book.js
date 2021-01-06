import React from "react";

const Book = ({ book }) => {
  return (
    // <pre>{JSON.stringify(book)}</pre>
    <div className="card-content">
      <h2>{book.volumeInfo.title}</h2>
      <div className="card-body">
        <img src={book.volumeInfo.imageLinks.thumbnail} />
        <p>
          {" "}
          Author:{" "}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.map((author, index) => (
                <span key={index}>{author}</span>
              ))
            : "Unknown"}
        </p>
        <p>Publisher: {book.volumeInfo.publisher}</p>
        <p>Published: {book.volumeInfo.publishedDate}</p>
        <p>{book.volumeInfo.description}</p>
      </div>
      <a className="card-button">Add to wishlist</a>
    </div>
  );
};

export default Book;
