import React, { Fragment, useState } from "react";
import "../App.css";



function AddStudentForm() {
  const [isbn_no, setISBNno] = useState("ISBN");
  const [title, setTitle] = useState("Title");
  const [author, setAuthor] = useState("Author");
  const [category, setCategory] = useState("Category");
  const [quantity, setQuantity] = useState("Quantity");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { isbn_no, title, author, category, quantity };

      const response = await fetch("http://localhost:5000/addbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="card card-body">
      <h1 className="text-center mt-5">ADD STUDENT</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={isbn_no}
          onChange={(e) => setISBNno(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select type="text" className="form-control"  onChange={(e) => setCategory(e.target.value)}>
          <option selected>Select Category</option>
            <option name={category} value="Action and Adventure">Action and Adventure</option>
            <option name={category} value="Classics">Classics</option>
            <option name={category} value="Comic Book or Graphic Novel">Comic Book or Graphic Novel</option>
            <option name={category} value="Detective and Mystery">Detective and Mystery</option>
            <option name={category} value="Fantasy">Fantasy</option>
            <option name={category} value="Historical Fiction">Historical Fiction</option>
            <option name={category} value="Horror">Horror</option>
            <option name={category} value="Literary Fiction">Literary Fiction</option>
        </select>
        <input
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="btn btn-success ml-5">Add</button>
      </form>
      </div>
    </Fragment>
  );
}

export default AddStudentForm;
