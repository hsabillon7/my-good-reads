import React, { useContext } from "react";
import { Context as WishListContext } from "../../context/wishListContext";

const Book = ({ book }) => {
  const { addBook } = useContext(WishListContext);

  return (
    // <pre>{JSON.stringify(book)}</pre>
    <div className="card-content">
      <div className="card-body">
        <h2>{book.volumeInfo.title}</h2>
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : null
          }
          alt={book.volumeInfo.title}
        />
        <p>
          <strong>Author:</strong>{" "}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.map((author, index) => (
                <span key={index}>{author}</span>
              ))
            : "Unknown"}
        </p>
        <p>
          <strong>Publisher:</strong> {book.volumeInfo.publisher}
        </p>
        <p>
          <strong>Published:</strong> {book.volumeInfo.publishedDate}
        </p>
        <p>{book.volumeInfo.description}</p>
      </div>
      <div className="card-footer">
        <a className="card-button" onClick={() => addBook(book)}>
          Add to wishlist
        </a>
      </div>
    </div>
  );
};

export default Book;
