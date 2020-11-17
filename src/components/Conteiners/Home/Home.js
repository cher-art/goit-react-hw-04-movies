import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import servicesApi from "../../../services/servicesApi";
import styles from "./Home.module.css";

class Home extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    servicesApi.popularMovies().then((data) => {
      this.setState({
        films: data,
      });
    });
  }

  render() {
    const { films } = this.state;
    const { match } = this.props;
    return (
      <>
        <h1 className={styles.homeTitle}>Popular films</h1>
        <ul className={styles.homeList}>
          {films.map((film) => (
            <NavLink
              className={styles.homeItem}
              key={film.id}
              to={{
                pathname: `/movies/${film.id}`,
                state: {
                  id: `${film.id}`,
                },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                width="250px"
              />

              <h3 className={styles.homeItemName}>{film.title}</h3>
            </NavLink>
          ))}
        </ul>
      </>
    );
  }
}

export default Home;
