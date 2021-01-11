import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Book from "./Book";
import {
  Context as WishListContext,
  Provider as WishListProvider,
} from "../../context/wishListContext";
import BookInterface from "../../interfaces/Book";

test("Book render with values", () => {
  const book: BookInterface = {
    id: "123",
    volumeInfo: {
      title: "A book title",
      authors: ["A book author"],
      imageLinks: {
        thumbnail: "http://example.com/image.jpg",
      },
      publisher: "Editorial example",
      publishedDate: "09/01/2020",
      description: "A book description"
    },
  };
  render(
    <WishListProvider>
      <Book {...book}></Book>
    </WishListProvider>
  );
  expect(screen.getByText(/A book title/)).toBeInTheDocument();
});

test("Click on add to wishlist calls addBook function", () => {
  const book = {
    id: "123",
    volumeInfo: {
      title: "A book title",
      authors: ["A book author"],
      imageLinks: {
        thumbnail: "http://example.com/image.jpg",
      },
      publisher: "Editorial example",
      publishedDate: "09/01/2020",
      description: "A book description"
    },
  };

  const state = {
    wishlist: [],
    addBook: jest.fn(),
  };

  render(
    <WishListContext.Provider value={state}>
      <Book {...book}></Book>
    </WishListContext.Provider>
  );
  fireEvent.click(screen.getByText(/Add to wishlist/i));
  expect(state.addBook).toHaveBeenCalledTimes(1);
});
