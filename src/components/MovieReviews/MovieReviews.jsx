import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../api/api";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movie_id } = useParams();
  const [movieReview, setMovieReview] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await movieReviews(movie_id);
        setMovieReview(data.results);
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
        {movieReview.map((review) => {
          return (
            <li className={css.liElem} key={review.id}>
              <h3>{review.author}</h3>
              <p className={css.desc}>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
