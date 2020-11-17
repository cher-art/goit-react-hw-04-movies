import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import ShowDetails from "../MoviesDetails/MoviesDetails";
import servicesApi from "../../../services/servicesApi";

class Movies extends Component {
  state = {
    films: [],
    query: "",
  };

  componentDidMount() {
    if (this.props.location.query) {
      servicesApi.searchMovies(this.props.location.query).then((data) => {
        this.setState({
          films: data,
          query: this.props.location.query,
        });
      });
    }
  }

  inputHeandler = ({ target }) => {
    this.setState({
      query: target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    servicesApi.searchMovies(this.state.query).then((data) => {
      this.setState({
        films: data,
      });
    });
  };

  render() {
    const { films, query } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h1>MoviesPage</h1>
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <input
            onChange={this.inputHeandler}
            name="search"
            value={query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
        <ul>
          {films.map((film) => (
            <li key={film.id} onClick={this.activeFilm}>
              <Link
                to={{
                  pathname: `/movies/${film.id}`,
                  id: film.id,
                  state: {
                    from: `${match.path}`,
                    query,
                  },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
                <h3 data-id={film.id}>{film.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movies;
