import { useContext } from "react";
import MovieContext from "../store/movieContext";
import GetMovie from "./GetMovie";

const POPULAR__MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=40b98d136e6b6d3ae87106bc05050eb1";

const RATED__MOVIES =
  "http://api.themoviedb.org/3/movie/top_rated?api_key=40b98d136e6b6d3ae87106bc05050eb1";

const POPULAR__TV =
  "http://api.themoviedb.org/3/tv/popular?api_key=40b98d136e6b6d3ae87106bc05050eb1";

const RATED__TV =
  "http://api.themoviedb.org/3/tv/top_rated?api_key=40b98d136e6b6d3ae87106bc05050eb1";

const Movies = () => {
  const { popularMovies, popularTV, ratedMovies, ratedTV } =
    useContext(MovieContext);
  return (
    <>
      {ratedMovies && <GetMovie API={RATED__MOVIES} label="Top Rated Movies" />}
      {ratedTV && <GetMovie API={RATED__TV} label="Top Rated TV Shows" />}
      {popularMovies && (
        <GetMovie API={POPULAR__MOVIES} label="Popular Movies" />
      )}
      {popularTV && <GetMovie API={POPULAR__TV} label="Popular TV Shows" />}
    </>
  );
};

export default Movies;
