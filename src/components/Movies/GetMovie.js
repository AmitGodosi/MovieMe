import axios from "axios";
import Movie from "./Movie/Movie";
import classes from "./Movies.module.css";
import { useState, useEffect } from "react";
import MovieOverview from "./MovieOverview";
import movieContext from "../store/movieContext";

const GetMovie = (props) => {
  const [moviesState, setMoviesState] = useState([]);
  const [movieState, setMovieState] = useState(false);

  useEffect(async () => {
    const TMDBmovies = await axios.get(props.API);
    const moviesList = TMDBmovies.data.results;
    console.log(props.API, moviesList);
    const transformMovies = moviesList.map((movie) => {
      return {
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
      };
    });
    setMoviesState(transformMovies);
  }, []);

  const movieHandler = (movie) => {
    setMovieState(movie);
  };
  const closeMovieHandler = () => {
    setMovieState(false);
  };

  return (
    <movieContext.Provider value={{ movie: movieState }}>
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
