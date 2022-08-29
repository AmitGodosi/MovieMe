import React from "react";

const movieContext = React.createContext({
  videos: [],
  movie: {},
  popularMovies: true,
  popularTV: true,
  ratedMovies: true,
  ratedTV: true,
  upcomingMovies: true,
});

export default movieContext;
