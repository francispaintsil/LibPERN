import React, { Component, Fragment } from 'react'
import "../Login.css";
import "../App.css";



class KeyGenComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        error: null,
        isLoaded: false,
        librarian: [],
        selected: false,
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/librarian")
        .then((response) => response.json())
        .then((result) => {
            this.setState({
              isLoaded: true,
              librarian: result
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
        const librarian = this.state.librarian;
        let error = this.state.error;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else {
          return (
            <div className="mt-5 text-center">
               
              {librarian.map((lib, item) => (
                <Fragment key={item}>
                  
                  <div className="mb-5">
                  <div>{lib.username}</div>
                    <div>{lib.library_key}</div>
                  </div>
                </Fragment>
              ))}
            </div>
          );
        }
      }
}
export default KeyGenComponent;
