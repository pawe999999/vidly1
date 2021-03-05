import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NavBar from "./components/common/NavBar";
import NotFound from "./components/common/notFound";
import MoviesId from "./components/common/moviesID";
import LoginForm from "./components/common/loginForm";
import "./App.css";
import Register from "./components/common/register";
import NewMovie from "./components/common/new";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MoviesId} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={Register} />
            <Route path="/not-found" component={NotFound} />
            <Redirect path="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
