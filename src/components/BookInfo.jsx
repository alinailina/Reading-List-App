import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookInfo = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div>
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
      <span role="img" aria-label="delete-mark">
        &#10008;
      </span>
    </li>
  );
};

export default BookInfo;
