import axios from "axios";

const popularMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=784fa8d5feaa05d43277b9356f5f9153`
    )
    .then((response) => response.data.results);
};

const searchMovies = (query) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=784fa8d5feaa05d43277b9356f5f9153&query=${query}&page=1`
    )
    .then((response) => response.data.results);
};

const searchId = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=784fa8d5feaa05d43277b9356f5f9153`
    )
    .then((response) => response.data);
};

const movieCredits = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=784fa8d5feaa05d43277b9356f5f9153`
  );
};

const movieReviews = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=784fa8d5feaa05d43277b9356f5f9153&language=en-US&page=1`
  );
};

export default {
  popularMovies,
  searchMovies,
  searchId,
  movieCredits,
  movieReviews,
};
