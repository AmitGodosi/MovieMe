import axios from "axios";
import Movie from "./Movie/Movie";
import classes from "./Movies.module.css";
import { useState, useEffect } from "react";
import movieContext from "../store/movieContext";
import MovieOverview from "./MovieOverview";

const GetMovie = (props) => {
  const [moviesState, setMoviesState] = useState([]);
  const [movieState, setMovieState] = useState(false);
  const [videosState, setVideosState] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const TMDBmovies = await axios.get(props.API);
      const moviesList = TMDBmovies.data.results;
      let type = "";

      if (props.API.slice(28, 30) === "tv") {
        type = "TV";
      } else {
        type = "Movie";
      }

      const transformMovies = moviesList.forEach((movie) => {
        try {
          return {
            type: type,
            img: "https://image.tmdb.org/t/p/w500/".concat(movie.poster_path),
            backdrop: "https://image.tmdb.org/t/p/w780/".concat(
              movie.backdrop_path
            ),
            overview: movie.overview,
            releaseDate: movie.release_date
              ? movie.release_date
              : movie.first_air_date,
            title: movie.title ? movie.title : movie.name,
            vote: movie.vote_average,
            id: movie.id,
          };
        } catch (error) {
          console.log(error);
        }
      });
      setMoviesState(transformMovies);
    };
    fetchMovies();
  }, []);

  const movieHandler = async (movie) => {
    if (movie.type === "TV") {
      const data = await axios.get(
        `https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=40b98d136e6b6d3ae87106bc05050eb1&1`
      );
      if (data.data.results.length !== 0) {
        setVideosState(data.data.results[0]);
      }
    } else {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=40b98d136e6b6d3ae87106bc05050eb1&1`
      );
      if (data.data.results.length !== 0) {
        setVideosState(data.data.results[0]);
      }
    }
    setMovieState(movie);
  };
  const closeMovieHandler = () => {
    setMovieState(false);
    setVideosState([]);
  };

  return (
    <movieContext.Provider value={{ movie: movieState, videos: videosState }}>
      <h3 className={classes.label}>{props.label}</h3>
      <ul className={classes.movies}>
        {moviesState.map((movie) => (
          <Movie
            img={movie.img}
            key={movie.img}
            onClick={movieHandler.bind(null, movie)}
          />
        ))}
      </ul>
      {movieState && <MovieOverview onClick={closeMovieHandler} />}
    </movieContext.Provider>
  );
};

export default GetMovie;
