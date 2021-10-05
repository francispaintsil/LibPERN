import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Registration from "./components/pages/registration";
import Header from "./components/header";
import { Notfound } from "./components/pages/notFound";
import "./index.css";
import App from "./App";
import reducer from "./rootReducer";
import withAuth from "./components/withAuth";
import SearchBook from "./components/SearchBook";
import AddStudentForm from "./components/AddStudentForm";
import AdminLogin from "./components/AdminLogin";
import AddLibrarian from "./components/AddLibrarian";
import KeyGenComponent from "./components/KeyGenComponent";
import login from "./components/pages/login";
import Search from "./components/Search";
import Book from "./components/Book"
import AddBookForm from "./components/AddBookForm";
import BookInformation from "./components/BookInformation";

//           final state
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome devtools thing
);

ReactDOM.render(
  <React.Fragment>
   
    <Provider store={store}>
      <Router>
        <div className="main">
          <Header />
          <Switch>
            <Route exact path="/" component={login} >
            <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={login} />

            <Route path="/home">
            <Search/>
           <SearchBook/>
              <AddBookForm/>
              <Book/>
         <BookInformation/>
  
            </Route>
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/student" component={Search} />
            <Route exact path="/searchbook" component={SearchBook}/>
            <Route exact path="/addStudent" component={AddStudentForm}/>
            <Route path="/myadminpage" component={AdminLogin}/>
            <Route path="/addlibrarian" component={AddLibrarian}/>
            <Route exact path="/keygenerator" component={KeyGenComponent}/>
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>

  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
