import React, { Component, createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { login } from '../../redux/actions/logIn-logOut';
import { showSnackbar } from '../../redux/actions/snackbar';
import { useHistory } from 'react-router';

class Login extends Component {
	idField = createRef();
	passField = createRef();


	authorisation = (e) => {
		const { login, showSnackbar } = this.props.actions;
		e.preventDefault();
		let idField = this.idField.current.value;
		let passField = this.passField.current.value;

		if (!idField.trim() && !passField.trim()) {
			showSnackbar(true, 'Please, enter username and password.');
		} else if (!passField.trim()) {
			showSnackbar(true, 'Please, enter password.');
		} else if (!idField.trim()) {
			showSnackbar(true, 'Please, enter username.');
		} else {
			let userObject = {
				// COMMENT hash getrequest for pass
				username: idField,
				library_key: passField
			};
			axios
				.get('http://localhost:5000/login', userObject)
				.then((rows) => {
					if(!rows.length === 0){
						console.log(rows);
						useHistory().push('/home');
					}
				})
				.catch((err) => {
					console.error(err);
					// showSnackbar(true, 'Error logging in please try again.');
				});
		}
	};

	handleKeyPress = (e) => {
		const { showSnackbar } = this.props.actions;
		if (e.key === 'Enter') {
			e.preventDefault();
			this.authorisation(e);
			setTimeout(() => {
				showSnackbar(false, null);
			}, 2000);
		}
	};

	render() {
		const { snackbarState, snackbarMessage } = this.props;
		const { showSnackbar } = this.props.actions;
		return (
			<div className="col-md-4 col-md-offset-4" id="login">
<section id="inner-wrapper" className="login">
  <article>
    <form>
    <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon"></span>
          <TextField
		  className="form-control"
			inputRef={this.idField}
			size="small"
			label="Enter your Username"
			variant="outlined"
			onKeyPress={this.handleKeyPress}
			/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon"></span>
          <TextField
		    className="form-control"
			inputRef={this.passField}
			size="small"
			type="password"
			label="Enter your Library Code"
			variant="outlined"
			onKeyPress={this.handleKeyPress}
			/>
        </div>
      </div>
	  <Button
	  className="form-control"
		variant="contained"
		size="small"
		color="primary"
		onClick={(e) => {
		this.authorisation(e);
		setTimeout(() => {
				showSnackbar(false, null);
						}, 2000);
					}}>
					Authorize
				</Button>
         <Snackbar
	      anchorOrigin={{
		    vertical: 'bottom',
		    horizontal: 'left',
	       }}
	      open={snackbarState}
	      message={snackbarMessage}/>
    </form>
  </article>
</section>
</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.loggedIn,
		snackbarState: state.snackbarState,
		snackbarMessage: state.snackbarMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(
			{
				login,
				showSnackbar,
			},
			dispatch
		),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
