import createDataContext from "./createDataContext";

const wishListReducer = (state, action) => {
  switch (action.type) {
    case "addBook":
      if (
        state.wishlist.findIndex((book) => book.id === action.payload.id) === -1
      ) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      }
      return state;
    case "removeBook":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (book) => book.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const addBook = (dispatch) => (book) => {
  dispatch({ type: "addBook", payload: book });
};

const removeBook = (dispatch) => (book) => {
  dispatch({ type: "removeBook", payload: book });
};

export const { Provider, Context } = createDataContext(
  wishListReducer,
  { addBook, removeBook },
  { wishlist: [] }
);
