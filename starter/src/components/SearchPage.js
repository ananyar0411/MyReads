import * as BooksAPI from "../BooksAPI"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Book from "./Book";



const Search = ({changeShelf}) => {
    const [query, setQuery] = useState("");
    const [searchedBook, setSearchedBook] = useState([]);

    useEffect(() => {
      const result = async () => {
          const Data = await BooksAPI.search(query);
          setSearchedBook(Data);
      };

      if (!query.length) {
        setSearchedBook([]);
        return;
      };

      result();
      
      return(() => {
          setSearchedBook([]);
      });
  }, [query])

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to={'/'}> Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={query}
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {searchedBook.length > 0 && searchedBook.map((book) => (
                <li key={book.id}>
                    <Book book={book} changeShelf={changeShelf}/>
                 </li>
                ))}  
            </ol>
          </div>
        </div>
    )
}

export default Search;