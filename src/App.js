import React, { Suspense, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Conteiners/Home/Home";
import Movies from "./components/Conteiners/Movies/Movies";
import Header from "./components/Header/Header";
import MovieDetails from "./components/Conteiners/MoviesDetails/MoviesDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Suspense>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies/:moviesId" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
