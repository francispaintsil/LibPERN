import React, { Component } from 'react'
import "../Login.css";
import "../App.css";

class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date : Date.now()
        };
    }

    _onDateChange(e) {
        let state = this.state;
        state['date'] = e.target.value;
        // Or (you can use below method to access component in another method)
        state['date'] = this.dateRef.value;
        this.setState(state);
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
							<article>
								<form>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input type="text" className="form-control" placeholder="Enter FirstName"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input type="text" className="form-control" placeholder="Enter LastName"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-key"> </i></span>
											<input type="password" className="form-control" placeholder="Password"/>
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
}
export default AdminLogin;
