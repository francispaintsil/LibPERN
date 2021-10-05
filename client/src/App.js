import React, { Fragment} from "react";
import AddBookForm from "./components/AddBookForm";
import Book from "./components/Book";
import "./App.css";
import Search from "./components/Search";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import login from "./components/pages/login";
import registration from "./components/pages/registration";



// <Link className={loggedIn === true ? "navButtonHide" : "navButtonShow"} to="/login">
// <Button variant="contained" size="small" color="primary">
//   Login
// </Button>
// </Link>
// <Link className={loggedIn === true ? "navButtonHide" : "navButtonShow"} to="/registration">
// <Button variant="contained" size="small" color="primary">
//   SignUp
// </Button>
// </Link>

function App() {
  return (
    <Fragment>
      <BrowserRouter>
  
      <Switch>
        <login/>
        <registration/>
        <Route path="/home">
          <Search/>
         <AddBookForm />
         <Book/>

      </Route>
      </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
