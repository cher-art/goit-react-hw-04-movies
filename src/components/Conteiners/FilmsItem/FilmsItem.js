import React from "react";

const FilmsItem = ({ title, poster_path }) => {
  return (
    <li>
      <img src={poster_path} alt={title} width="250px" height="350px" />
      <h3>{title}</h3>
    </li>
  );
};

export default FilmsItem;
