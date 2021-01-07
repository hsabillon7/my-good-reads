import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";
import BookList from "./BookList";
import {
  Context as WishListContext,
  Provider as WishListProvider,
} from "../../context/wishListContext";

it("render the booklist without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookList allAvailableBooks={[]}></BookList>, div);
});

test("BookList shows a book value", () => {
  const allAvailableBooks = {
    items: [
      {
        id: "123",
        volumeInfo: { title: "A book title", authors: ["A book author"] },
      },
    ],
  };
  render(
    <WishListProvider>
      <BookList allAvailableBooks={allAvailableBooks}></BookList>
    </WishListProvider>
  );
  // screen.debug();
  expect(screen.getByText(/^Add to wishlist/)).toBeInTheDocument();
});
