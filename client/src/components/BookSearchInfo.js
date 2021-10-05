import React, {  Component, Fragment } from "react";


class BookSearchInfo extends Component {
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
      .then((result) => {
          this.setState({
            isLoaded: true,
            books: result
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
    console.log(books);
    let error = this.state.error;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          {books.map((book, item) => (
            <Fragment key={item}>
               <div className="mb-5">
              <h3>{book.isbn_no}</h3>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.category}</p>
                <p>{book.quantity}</p>
              </div>
              
            </Fragment>
            
          ))}
        
        </div>
      );
    }
  }
}

export default BookSearchInfo;
