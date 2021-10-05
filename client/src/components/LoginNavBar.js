
import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";



function LoginNavbar(props) {
    return (
        <Fragment>
          <nav className="navbar navbar-expand-lg bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <div><NavLink className="navbar-brand nav-text libraryManager" exact to="/">LIBRARY MANAGER</NavLink></div>
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                   <li className="nav-item">
                   <NavLink className="nav-link nav-text text-white about" exact to="/">ABOUT</NavLink>
                   </li>
                   <li className="nav-item">
                    <NavLink className="nav-link nav-text text-white login" exact to="/">LOGIN</NavLink>
                 </li>
                </ul>
             </div>
          </nav>
      </Fragment>
    )
}

export default LoginNavbar;
