import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookInfo from "./BookInfo";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <ul>
      {books.map((book) => {
        return <BookInfo book={book} key={book.id} />;
      })}
    </ul>
  ) : (
    <p className="empty">Please add books</p>
  );
};

export default BookList;
