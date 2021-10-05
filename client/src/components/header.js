import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { logout } from "../redux/actions/logIn-logOut";
import "../App.css";

class Header extends Component {
  render() {
    let { loggedIn } = this.props;
    let { logout } = this.props.actions;

    return (
      <div className="header">
         <Link className= {loggedIn === false ? "navButtonHide" : "navButtonShow"} to="/home">
          <Button variant="contained" size="small" color="primary">
            Home
          </Button>
        </Link> 

      <Link className= {loggedIn === false ? "navButtonHide" : "navButtonShow"} to="/student">
          <Button variant="contained" size="small" color="primary">
            Find Students
          </Button>
        </Link> 
      
        <Link  className= {loggedIn === false ? "navButtonHide" : "navButtonShow"} to="/searchbook"> 
        <Button variant="contained" size="small" color="primary">
          FIND BOOK
        </Button>
        </Link>
        <Link  className= {loggedIn === false ? "navButtonHide" : "navButtonShow"} to="/addStudent">
          <Button variant="contained" size="small" color="primary">
            ADD USER
          </Button>
        </Link>
        <Button
          className={loggedIn === false ? "navButtonHide" : "navButtonShow"}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            logout();
            localStorage.clear();
            window.location.href = "http://localhost:3000/login";
          }}
        >
          Sign Out
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        logout
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);