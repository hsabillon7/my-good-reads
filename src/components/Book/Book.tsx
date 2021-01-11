import React, { useContext } from "react";
import { Context as WishListContext } from "../../context/wishListContext";
import BookInterface from "../../interfaces/Book";

const Book = ( book: BookInterface) => { 
  const { addBook } = useContext(WishListContext);
  
  return (
    <div className="card-content">
      <div className="card-body">
        <h2>{book.volumeInfo.title}</h2>
        <img
          src={
            book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
          }
          alt={book.volumeInfo.title}
        />
        <p>
          <strong>Author:</strong>{" "}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.map((author:string, index:number) => (
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
