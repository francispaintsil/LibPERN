import React, { useState, Fragment } from 'react';
import ViewHistory from './ViewHistory';


function Search() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  console.log(students);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/student/?name=${name}`);

      const parseResponse = await response.json();

      setStudents(parseResponse);
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
            placeholder="Search by Name or ID  ..."
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
              <th>ID</th>
              <th>FirstName</th>
              <th>SurName</th>
              <th>Gender</th>
              <th>D.O.B</th>
              <th>Address</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {students.map(student => (
              <tr key={student.student_id}>
                <h6><td>{student.school_id}</td></h6>
                <td>{student.firstname}</td>
                <td>{student.surname}</td>
                <td>{student.gender}</td>
                <td>{student.dob}</td>
                <td>{student.addres}</td>
                <td>{student.course}</td>
                <td><ViewHistory/></td>
              </tr>
            ))}
          </tbody>
        </table>
        {students.length === 0 && <h2>No Student Found (-_-)</h2>} 
      </div>
    </Fragment>
  );
}

export default Search;