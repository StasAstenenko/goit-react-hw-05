import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieCredits } from "../../api/api";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movie_id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await movieCredits(movie_id);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movie_id]);
  return (
    <div>
      {loading && <Loader />}{" "}
      <ul>
        {movieCast?.cast?.map((actor) => {
          return (
            <li className={css.liElem} key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={`${actor.name}`}
                className={css.img}
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
