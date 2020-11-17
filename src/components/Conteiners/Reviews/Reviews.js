import React, { useEffect, useState } from "react";
import servicesApi from "../../../services/servicesApi";

const Reviews = ({ id, ...props }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    servicesApi.movieReviews(id).then((data) => setReviews(data.data.results));
  });
  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((el) => (
            <li>
              <h4>Author: {el.author}</h4>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <p>Not found.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
