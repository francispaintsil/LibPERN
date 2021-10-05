import React, {  Component, Fragment } from "react";


class SearchInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      students: [],
      selected: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            students: result
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

    const students = this.state.students;
    console.log(students);
    let error = this.state.error;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          {students.map((student, item) => (
            <Fragment key={item}>
               <div className="mb-5">
              <h3>{`ID:  `+ student.school_id}</h3>
                <p>{student.firstname}</p>
                <p>{student.surname}</p>
                <p>{student.gender}</p>
                <p>{student.addres}</p>
                <p>{student.course}</p>
              </div>
              
            </Fragment>
            
          ))}
        
        </div>
      );
    }
  }
}

export default SearchInformation;
