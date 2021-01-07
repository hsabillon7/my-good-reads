import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
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
  expect(screen.getByText(/^Author:/)).toHaveTextContent(
    "Author: A book author"
  );
});
