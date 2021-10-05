import React, { useState, Fragment } from 'react';
import AssignBook from './AssignBook';



function SearchBook() {
  const [name, setName] = useState("");
  const [books, setBooks] = useState([]);
  console.log(books);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/searchbook/?name=${name}`);

      const parseResponse = await response.json();

      setBooks(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className="container text-center">
        <div className="mb-container">
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            name="name"
            placeholder="Search Book by Author or Title..."
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className="btn btn-success">Search</button>
        </form>
        </div>
        <table className="table my-5">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {books.map(book => (
              <tr key={book.book_id}>
                <h6><td>{book.isbn_no}</td></h6>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.quantity}</td>
                <td><AssignBook/></td>
              </tr>
            ))}
          </tbody>
        </table>
        {books.length === 0 && <h4>No Book Found (-_-)</h4>} 
      </div>
    </Fragment>
  );
}

export default SearchBook;