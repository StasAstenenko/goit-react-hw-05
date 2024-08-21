import MovieBackdropPath from "../MovieBackdropPath/MovieBackdropPath";
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li className={css.liElem} key={movie.id}>
            <MovieBackdropPath movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
