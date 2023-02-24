import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


const Home = ({books, changeShelf}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <BookShelf 
                    name="Currently Reading" 
                    changeShelf={changeShelf} 
                    books={books.filter((book) => book.shelf === "currentlyReading")}/>
                <BookShelf 
                    name="Want To Read" 
                    changeShelf={changeShelf} 
                    books={books.filter((book) => book.shelf === "wantToRead")}/>
                <BookShelf 
                    name="Read" 
                    changeShelf={changeShelf} 
                    books={books.filter((book) => book.shelf === "read")}/>
                
                </div>
            </div>
            <div className="open-search">
                <Link to={'/search'}>Add a book</Link>
            </div>
        </div>
    )
};

export default Home;