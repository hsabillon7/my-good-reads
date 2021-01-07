import React, { useContext } from "react";
import { Context as WishListContext } from "../../context/wishListContext";

const Book = ({ book }) => {
  const { addBook } = useContext(WishListContext);

  return (
    // <pre>{JSON.stringify(book)}</pre>
    <div className="card-content">
      <h2>{book.volumeInfo.title}</h2>
      <div className="card-body">
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : null
          }
          alt={book.volumeInfo.title}
        />
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
      <a className="card-button" onClick={() => addBook(book)}>
        Add to wishlist
      </a>
    </div>
  );
};

export default Book;
