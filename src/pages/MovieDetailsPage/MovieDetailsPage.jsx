import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { movieDetails } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import clsx from "clsx";

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

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
    <div className={css.container}>
      <GoBackBtn />
      <div className={css.containerMovie}>
        {loading && <Loader />}
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          height="400"
        />
        <div className={css.desc}>
          <h2 className={css.h2}>{movieDetail.original_title}</h2>
          <p>User score: {Math.round(movieDetail.vote_average) * 10}%</p>
          <h2>Overview</h2>
          <p>{movieDetail.overview}</p>
          <h2>Genres</h2>
          <p>{movieDetail?.genres?.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <h3>Additional information</h3>
      <div className={css.linkContainer}>
        <NavLink className={isActive} to="credits">
          Cast
        </NavLink>
        <NavLink className={isActive} to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
