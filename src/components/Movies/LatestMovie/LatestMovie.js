import axios from "axios";
import React, { useState, useEffect } from "react";
import LatestMovieOverview from "./LatestMovieOverview";
import classes from "./LatestMovie.module.css";
import MovieContext from "../../store/movieContext";
import MovieOverview from "../MovieOverview";

const LatestMovie = (props) => {
  const [movieState, setMovieState] = useState(false);
  const [latestMovie, setLatestMovie] = useState([]);

  useEffect(() => {
    axios.get(props.API).then((res) => {
      const movies = res.data.results;
      const returnMovies = movies.map((movie) => {
        const background = "https://image.tmdb.org/t/p/w780".concat(
          movie.backdrop_path
        );
        return {
          backdrop: background,
          title: movie.title,
          vote: movie.vote_average,
          releaseDate: movie.release_date,
          overview: movie.overview,
        };
      });
      setLatestMovie(returnMovies);
    });
  }, []);

  const movieHandler = (movie) => {
    setMovieState(movie);
  };
  const closeMovieHandler = () => {
    setMovieState(false);
  };

  return (
    <MovieContext.Provider value={{ movie: movieState }}>
      <h2 className={classes.latest}>Latest Uploads</h2>
      <ul className={classes.main}>
        {latestMovie.map((movie) => {
          return (
            <LatestMovieOverview
              backdrop={movie.backdrop}
              key={movie.img}
              onClick={movieHandler.bind(null, movie)}
            />
          );
        })}
      </ul>
      {movieState && (
        <MovieOverview onClick={closeMovieHandler} last={"TRUE"} />
      )}
    </MovieContext.Provider>
  );
};

export default LatestMovie;
