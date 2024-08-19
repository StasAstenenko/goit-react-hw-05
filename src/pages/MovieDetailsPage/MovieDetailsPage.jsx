import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { movieDetails } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

const MovieDetailsPage = () => {
  const { movie_id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await movieDetails(movie_id);
        // console.log(data);
        setMovieDetail(data);
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
      <GoBackBtn />
      <div className={css.container}>
        {loading && <Loader />}
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
        />
        <div className={css.desc}>
          <h2>{movieDetail.original_title}</h2>
          <p>User score: {Math.round(movieDetail.vote_average)}%</p>
          <h2>Overview</h2>
          <p>{movieDetail.overview}</p>
          <h2>Genres</h2>
          <p>{movieDetail?.genres?.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <h3>Additional information</h3>
      <div className={css.linkContainer}>
        <NavLink to="credits">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
