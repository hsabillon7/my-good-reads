import React, { useContext } from "react";
import "./WishList.scss";
import { Context as WishListContext } from "../../context/wishListContext";

const WishList = () => {
  const { state, removeBook } = useContext(WishListContext);

  return (
    <>
      <h2>
        My reading wishlist
        {state.wishlist.length > 0 ? ` (${state.wishlist.length})` : null}
      </h2>
      <div className="reading-list-content">
        {state.wishlist.length ? (
          state.wishlist.map((book) => (
            <div key={book.id}>
              <h3>
                {book.volumeInfo.title}{" "}
                <span className="remove-book" onClick={() => removeBook(book)}>
                  X
                </span>
              </h3>
              <p>
                Author:{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.map((author, index) => (
                      <span key={index}>{author}</span>
                    ))
                  : "Unknown"}
              </p>
            </div>
          ))
        ) : (
          <p className="empty-wishlist">Your wishlist is empty</p>
        )}
      </div>
    </>
  );
};

export default WishList;
