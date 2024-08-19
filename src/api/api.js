import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjU5ODUxZWI3MjdmZDQ4ZjEzOGE1NzU3OTg5OWNjNyIsIm5iZiI6MTcyNDA1ODY0NC4zOTkzNzEsInN1YiI6IjY2YzMwNWMyZjI0MTYwMTdiZmQwZTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0xbX-G62JCyqFIf4qjNMg_DTzyBBIyMB6dwrZhYOC7I",
  accept: "application/json",
};

export async function fetchTreadingMovies() {
  const { data } = await axios.get("/trending/movie/day");
  return data;
}

export async function searchMovie(query) {
  const { data } = await axios.get("/search/movie", { params: { query } });
  return data;
}

export const movieCredits = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};

export const movieReviews = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data;
};

export const movieDetails = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};
