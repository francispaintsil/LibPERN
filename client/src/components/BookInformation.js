import React, { Fragment, Component } from "react";
import EditBook from "./EditBook";

class BookInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      books: [],
      selected: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/books")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  render() {
    const books = this.state.books;
   
    let error = this.state.error;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="mt-5 text-center">
           
          {books.map((book, item) => (
            <Fragment key={item}>
              <div className="mb-5">
              <h3>{book.title}</h3>
              <div>{book.isbn_no}</div>
                <div>{book.author}</div>
                <div>{book.category}</div>
                <div>{book.quantity}</div><br/>
                <EditBook book={book}/>
              </div>
            </Fragment>
          ))}
        </div>
      );
    }
  }
}

export default BookInformation;
