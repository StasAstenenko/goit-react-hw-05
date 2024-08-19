import { useEffect, useState } from "react";
import { searchMovie } from "../../api/api";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import SearchMovie from "../../components/SearchMovie/SearchMovie";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("movie");

  useEffect(() => {
    const fetchMoviesPage = async () => {
      if (!query) {
        setMovies([]);
        setSearch(false);
        return;
      }
      try {
        setLoading(true);
        const data = await searchMovie(query);
        setMovies(data.results);
        setSearch(true);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesPage();
  }, [query]);

  const handleSearch = (searchKeyword) => {
    if (searchKeyword.trim() !== "") {
      setMovies([]);
      setSearchParams({ movie: searchKeyword });
    }
  };

  return (
    <div>
      <SearchMovie onSubmit={handleSearch} />
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
      {movies.length === 0 && search && <NotFoundPage />}
    </div>
  );
}

export default MoviesPage;
