import React, { useState } from 'react'
import "../Login.css";
import "../App.css";
import KeyGenComponent from './KeyGenComponent';


function AddLibrarian() {
  const [username, setUsername] = useState("Username");
  
 


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username};

      const response = await fetch("http://localhost:5000/addlibrarian", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });


      window.location = `/addlibrarian`;
      console.log(response);
  
    
    } catch (err) {
      console.error(err.message);
    }
  };

        return (
            <div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
                          <KeyGenComponent/> 
							<article>
								<form onSubmit={onSubmitForm}>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter UserName"/>
										</div>
									</div>
									  <button type="submit" className="btn btn-success btn-block">Generate Code</button>
								</form>
							</article>
						</section>
            </div>
        )
}
export default AddLibrarian;
