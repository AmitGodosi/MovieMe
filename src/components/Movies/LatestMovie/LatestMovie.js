import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "./LatestMovie.module.css";
import MovieOverview from "../MovieOverview";
import MovieContext from "../../store/movieContext";
import {
  KeyboardArrowRightOutlined,
  NavigateBeforeOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
`;

const LatestMovie = (props) => {
  const [movieState, setMovieState] = useState(false);
  const [latestMovie, setLatestMovie] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

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

  const leftSlideHandler = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 19);
  };

  const rightSlideHandler = () => {
    setSlideIndex(slideIndex < 19 ? slideIndex + 1 : 0);
  };

  return (
    <MovieContext.Provider value={{ movie: movieState }}>
      <Container slideIndex={slideIndex} className={classes.container}>
        {latestMovie.length > 0 && (
          <div className={classes.movieContainer}>
            <div className={classes.imgContainer}>
              <NavigateBeforeOutlined
                onClick={leftSlideHandler}
                className={classes.left}
              />
              <KeyboardArrowRightOutlined
                onClick={rightSlideHandler}
                className={classes.right}
              />
              <img
                src={latestMovie[slideIndex].backdrop}
                onClick={movieHandler.bind(null, latestMovie[slideIndex])}
                className={classes.image}
              />
            </div>
            <h2 className={classes.title}>{latestMovie[slideIndex].title}</h2>
            <p className={classes.releaseDate}>
              {latestMovie[slideIndex].releaseDate}
            </p>{" "}
            <p className={classes.vote}>{latestMovie[slideIndex].vote}</p>
          </div>
        )}
      </Container>
      {movieState && (
        <MovieOverview onClick={closeMovieHandler} last={"TRUE"} />
      )}
    </MovieContext.Provider>
  );
  // return (
  //   <MovieContext.Provider value={{ movie: movieState }}>
  //     <Container slideIndex={slideIndex} className={classes.container}>
  //       {latestMovie.map((movie) => {
  //         return (
  //           <div className={classes.movieContainer}>
  //             <div className={classes.imgContainer}>
  //               <NavigateBeforeOutlined
  //                 onClick={leftSlideHandler}
  //                 className={classes.left}
  //               />
  //               <KeyboardArrowRightOutlined
  //                 onClick={rightSlideHandler}
  //                 className={classes.right}
  //               />
  //               <img
  //                 src={movie.backdrop}
  //                 onClick={movieHandler.bind(null, movie)}
  //                 className={classes.image}
  //               />
  //             </div>
  //             <h2 className={classes.title}>{movie.title}</h2>
  //             <p className={classes.releaseDate}>{movie.releaseDate}</p>{" "}
  //             <p className={classes.vote}>{movie.vote}</p>
  //           </div>
  //         );
  //       })}
  //     </Container>
  //     {movieState && (
  //       <MovieOverview onClick={closeMovieHandler} last={"TRUE"} />
  //     )}
  //   </MovieContext.Provider>
  // );
};

export default LatestMovie;
