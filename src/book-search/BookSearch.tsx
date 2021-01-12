import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import BookList from "../components/BookList/BookList";
import WishList from "../components/WishList/WishList";
import BookListInterface from "../interfaces/BookList";

const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState<BookListInterface>({});
    async function requestBooks() {
        if (bookTypeToSearch) {
            const allBooks = await getBooksByType(bookTypeToSearch);
            setAllAvailableBooks(allBooks);
        }
    }

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [bookTypeToSearch]);

    return (
            <>
                <div className="book--container">
                    <div className="search-params">
                        <div>
                            <form
                                onSubmit={(e) => {
                                    debugger;
                                    e.preventDefault();
                                   updateBookTypeToSearch(bookType)
                                }}
                            >
                                <input
                                    className="full-width"
                                    autoFocus
                                    name="gsearch"
                                    type="search"
                                    value={bookType}
                                    placeholder="Search for books to add to your reading list and press Enter"
                                    onChange={e => {
                                        updateBookType(e.target.value);
                                        setTimeout(() => {
                                            updateBookTypeToSearch(bookType);
                                        }, 500);
                                    }}
                                />
                            </form>
                            {!bookType && (
                                <div className="empty">
                                    <p>
                                        Try searching for a topic, for example
                                        <a onClick={() => {
                                                updateBookType("Javascript");
                                            }}
                                        >
                                            {" "}
                                            "Javascript"
                                        </a>
                                    </p>
                                </div>
                            )}

                        </div>
                    <BookList {...allAvailableBooks} />
                    </div>
                    <div className="reading-list-container">
                        <WishList />
                    </div>
                </div>
            </>
    );
};

export default BookSearch;
