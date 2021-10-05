import React, { Fragment } from "react";
import BookInformation from "./BookInformation";

function Book(props) {
  return (
    <Fragment>
      <div>
        <h1 className="text-center mt-5">LIBRARY BOOKS</h1>
        <BookInformation></BookInformation>
      </div>
    </Fragment>
  );
}

export default Book;
