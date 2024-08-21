import { useEffect, useState } from "react";
import { fetchTreadingMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const { results } = await fetchTreadingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      {loading && <Loader />}
      <h1 className={css.title}>The films that are trending!</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
