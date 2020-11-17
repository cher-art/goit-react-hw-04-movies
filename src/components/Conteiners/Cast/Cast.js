import React, { useEffect, useState } from "react";
import servicesApi from "../../../services/servicesApi";
// import "./Cast.css";

const Cast = ({ id, ...props }) => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    servicesApi.movieCredits(id).then((data) => {
      setActors(data.data.cast);
    });
  }, []);
  return (
    <div className="cast_box">
      <h1 className="cast_title">Cast</h1>
      <ul className="cast_list">
        {actors.map((actor) => (
          <li className="cast_item" key={actor.id}>
            <img
              className="cast_actor_photo"
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <h3 className="cast_actor_name">{actor.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
