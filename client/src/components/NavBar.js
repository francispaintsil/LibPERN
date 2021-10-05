
import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";



function Navbar(props) {
    return (
        <Fragment>
          <nav className="navbar navbar-expand-lg bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <div><NavLink className="navbar-brand nav-text libraryManager" exact to="/home">LIBRARY MANAGER</NavLink></div>
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item">
                   <NavLink className="nav-link nav-text findbook" exact to="/searchbook">FIND BOOK</NavLink>
                   </li>
                   <li className="nav-item">
                   <NavLink className="nav-link nav-text adduser" exact to="/addStudent">ADD USER</NavLink>
                   </li>
                   <li className="nav-item">
                    <span className="nav-link nav-text" href="#">ACCOUNT</span>
                   </li>
                   <li className="nav-item">
                    <NavLink className="nav-link nav-text logout" exact to="/">LOGOUT</NavLink>
                 </li>
                </ul>
             </div>
          </nav>
      </Fragment>
    )
}

export default Navbar;
