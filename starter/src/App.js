import "./App.css";
import { useState, useEffect} from "react";
import * as BooksAPI from "./BooksAPI"
import Search from "./components/SearchPage";
import Home from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const allBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    allBooks();
  },[])

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book.id, shelf)
    .then(() => {
      book.shelf = shelf
      setBooks(books.filter((b) => b.id !== book.id).concat(book))
  })
}


  return (
    <Routes>
      <Route exact path="/" element={<Home books={books} changeShelf={changeShelf}/>}/>
      <Route exact path="/search" element={<Search books= {books} changeShelf={changeShelf}/>}/>
    </Routes>
  );
}

export default App;