import React from "react";
import Book from "./Book";

const BookShelf = ({name, changeShelf, books}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} changeShelf={changeShelf}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;