import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";
import WishList from "./WishList";
import {
  Context as WishListContext,
  Provider as WishListProvider,
} from "../../context/wishListContext";

it("render wishlist without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <WishListProvider>
      <WishList></WishList>
    </WishListProvider>,
    div
  );
});

test("WishList shows default value", () => {
  render(
    <WishListProvider>
      <WishList></WishList>
    </WishListProvider>
  );
  expect(screen.getByText(/^Your wishlist is empty/)).toHaveTextContent(
    "Your wishlist is empty"
  );
});

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <WishListContext.Provider {...providerProps}>
      {ui}
    </WishListContext.Provider>,
    renderOptions
  );
};

test("WishList shows value from provider", () => {
  const providerProps = {
    value: {
      state: {
        wishlist: [
          {
            id: "123",
            volumeInfo: { title: "A book title", authors: ["A book author"] },
          },
        ],
      },
    },
  };
  customRender(<WishList />, { providerProps });
  expect(screen.getByText(/^Author:/)).toHaveTextContent(
    "Author: A book author"
  );
});

test("Wishlist calls removeBook function", () => {
  const providerProps = {
    value: {
      state: {
        wishlist: [
          {
            id: "123",
            volumeInfo: { title: "A book title", authors: ["A book author"] },
          },
        ],
      },
      removeBook: jest.fn(),
    },
  };
  customRender(<WishList />, { providerProps });
  fireEvent.click(screen.getByText(/X/i));
  expect(providerProps.value.removeBook).toHaveBeenCalledTimes(1);
});
