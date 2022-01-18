import React from "react";

const movieContext = React.createContext({
  movie: {},
  popularMovies: true,
  popularTV: true,
  ratedMovies: true,
  ratedTV: true,
});

export default movieContext;
