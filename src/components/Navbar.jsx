import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <nav>
      <h1>
        Reading list{" "}
        <span role="img" aria-label="books">
          &#128218;
        </span>
      </h1>
      <p>You have {books.length} books on your list</p>
    </nav>
  );
};

export default Navbar;
