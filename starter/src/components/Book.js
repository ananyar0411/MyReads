import React from "react";
import { update } from "../BooksAPI";
import ShelfChange from "./ShelfChange";

const Book = ({book, changeShelf}) => {

    const shelf = (shelf) => {
        update(book, shelf);
        changeShelf(book, shelf);
    }

    return (
    <div>
        <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                      `url(${book?.imageLinks?.smallThumbnail})`,
                    }}
                ></div>
                <ShelfChange currentShelf={book.shelf} changeShelf={shelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">By: {book.authors}</div>
        </div>
        </li>
    </div>
    )
}


export default Book;