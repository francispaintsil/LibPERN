import React, { useState } from 'react'
import "../Login.css";
import "../App.css";

function RegisterAdmin() {
  const [first_name, setFirstName] = useState("Firstname");
  const [last_name, setLastName] = useState("Lastname");
  const [password, setPassword] = useState("Password");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { first_name, last_name, password};

      const response = await fetch("http://localhost:5000/registeradmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/addlibrarian";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

    

        return (
            <div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
							<article>
								<form onSubmit={onSubmitForm}>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder="Enter FirstName"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder="Enter LastName"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-key"> </i></span>
											<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-key"> </i></span>
											<input type="password" className="form-control" placeholder="Confirm Password"/>
										</div>
									</div>
									  <button type="submit" className="btn btn-success btn-block">Register</button>
								</form>
							</article>
						</section>
            </div>
        )
}
export default RegisterAdmin;
