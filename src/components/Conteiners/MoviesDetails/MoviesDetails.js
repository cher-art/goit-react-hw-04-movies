import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import servicesApi from "../../../services/servicesApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

const MovieDetails = () => {
  const [from, setFrom] = useState("");
  const [film, setFilm] = useState({});
  const [search, setSearch] = useState("");
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const id = match.params.moviesId;

  const goBack = () => {
    from
      ? history.push({
          pathname: from,
          search: `query=${search}`,
          query: search,
        })
      : history.push("/");
  };

  useEffect(() => {
    setFrom(location.state.from);
    setSearch(location.state.query);
    servicesApi
      .searchId(id)
      .then((data) => {
        setFilm(data);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <button type="button" onClick={goBack}>
        GoBack
      </button>
      <hr />
      <div>
        <img
          src={
            `https://image.tmdb.org/t/p/w300${film.poster_path}` ||
            `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThfniC93R4LVY3q47jnybdM21z-XuIsx2rMQ&usqp=CAU`
          }
          alt={`${film.title}`}
        />
        <div>
          <h1>{`${film.title}`}</h1>
          <p>User score: {film.popularity}</p>
          <p>{film.overview}</p>
        </div>
      </div>

      <ul>
        <li>
          <Link to={`${match.url}/cast`}>cast</Link>
        </li>
        <li>
          <Link to={`${match.url}/reviews`}>reviews</Link>
        </li>
      </ul>

      <Route
        path={`${match.url}/cast`}
        render={(props) => <Cast {...props} id={id} />}
      />
      <Route
        path={`${match.url}/reviews`}
        render={(props) => <Reviews {...props} id={id} />}
      />
    </div>
  );
};

export default MovieDetails;
