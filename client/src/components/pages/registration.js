import React, { Component, createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { showSnackbar } from '../../redux/actions/snackbar';

class Registration extends Component {
	idField = createRef();
	firstPassField = createRef();
	secondPassField = createRef();

	submit = (e) => {
		const { showSnackbar } = this.props.actions;
		e.preventDefault();
		if (
			this.firstPassField.current.value !== this.secondPassField.current.value
		) {
			showSnackbar(true, "Passwords don't match");
		} else if (this.firstPassField.current.value.length < 6) {
			showSnackbar(true, 'Password: Minimum 6 symbols');
		} else if (!this.idField.current.value.trim()) {
			showSnackbar(true, 'Please, enter your username');
		} else {
			let userObject = {
				username: this.idField.current.value,
				pasword: this.firstPassField.current.value,
			};
			axios
				.post('http://localhost:5000/addlibrarian', userObject)
				.then((res) => {
					if (res.data.name === 'SequelizeUniqueConstraintError') {
						showSnackbar(true, 'Username Taken');
					} else {
						console.log('Successfully registered', res);
						this.idField.current.value = '';
						this.firstPassField.current.value = '';
						this.secondPassField.current.value = '';
						showSnackbar(true, 'Successfully registered');
					}
				})
				.catch((err) => console.log(err));
		}
	};

	handleKeyPress = (e) => {
		const { showSnackbar } = this.props.actions;
		if (e.key === 'Enter') {
			e.preventDefault();
			this.submit(e);
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
								<span className="input-group-addon"><i className="fa fa-user"> </i></span>
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
								<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
								<TextField
							inputRef={this.firstPassField}
							className="form-control"
							size="small"
							label="Password"
							type="password"
							autoComplete="current-password"
							variant="outlined"
							onKeyPress={this.handleKeyPress}
						/>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-key"> </i></span>
								<TextField
							inputRef={this.secondPassField}
							className="form-control"
							size="small"
							label="Repeat Password"
							type="password"
							autoComplete="current-password"
							variant="outlined"
							onKeyPress={this.handleKeyPress}
						/>
							</div>
						</div>
				
						<Button
						className="form-control"
					variant="contained"
					size="large"
					color="primary"
					onClick={(e) => {
						this.submit(e);
						setTimeout(() => {
						showSnackbar(false, null);
						}, 2000);
					}}
				>
					Submit
				</Button>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={snackbarState}
					message={snackbarMessage}
				/>
					</form>
				</article>
			</section>
</div>







































		);
	}
}

const mapStateToProps = (state) => {
	return {
		snackbarState: state.snackbarState,
		snackbarMessage: state.snackbarMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(
			{
				showSnackbar,
			},
			dispatch
		),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
