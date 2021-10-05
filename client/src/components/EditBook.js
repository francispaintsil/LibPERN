import React, { Fragment, useState } from "react";

function EditBook({ book }) {
  console.log(book);
  const [isbn_no, setISBN] = useState(book.isbn_no);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [category, setCategory] = useState(book.category);
  const [quantity, setQuantity] = useState(book.quantity);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const body = { isbn_no, title, author, category, quantity};
      const response = await fetch(`http://localhost:5000/update/${book.book_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/home";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteBook = async (e) => {
    e.preventDefault();
    try {
      const body = { isbn_no, title, author, category, quantity};
      const response = await fetch(`http://localhost:5000/book/${book.book_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/home";
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning mr-5"
        data-toggle="modal"
        data-target={`#id${book.book_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${book.book_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Book</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h5>ISBN</h5>
              <input
                type="text"
                className="form-control"
                value={isbn_no}
                onChange={(e) => setISBN(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Title</h5>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Author</h5>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Book Category</h5>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Quantity</h5>
              <input
                type="text"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateBook(e)}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => deleteBook(e)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditBook;
