import MovieBackdropPath from "../MovieBackdropPath/MovieBackdropPath";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieBackdropPath movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
