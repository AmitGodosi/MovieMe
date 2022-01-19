import React from "react";

const movieContext = React.createContext({
  movie: {},
  videos: [],
  popularMovies: true,
  popularTV: true,
  ratedMovies: true,
  ratedTV: true,
  upcomingMovies: true,
});

export default movieContext;
