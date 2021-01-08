import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Book from "./Book";
import {
  Context as WishListContext,
  Provider as WishListProvider,
} from "../../context/wishListContext";

test("Book render with values", () => {
  const book = {
    id: "123",
    volumeInfo: { title: "A book title", authors: ["A book author"] },
  };
  render(
    <WishListProvider>
      <Book book={book}></Book>
    </WishListProvider>
  );
  expect(screen.getByText(/A book title/)).toBeInTheDocument();
});

test("Click on add to wishlist calls addBook function", () => {
  const book = {
    id: "123",
    volumeInfo: { title: "A book title", authors: ["A book author"] },
  };

  const state = {
    wishlist: [],
    addBook: jest.fn(),
  };

  render(
    <WishListContext.Provider value={state}>
      <Book book={book}></Book>
    </WishListContext.Provider>
  );
  fireEvent.click(screen.getByText(/Add to wishlist/i));
  expect(state.addBook).toHaveBeenCalledTimes(1);
});
