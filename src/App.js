import { useState } from "react";
import Movies from "./components/Movies/Movies";
import Header from "./components/Nav/Header";
import MovieContext from "./components/store/movieContext";

function App() {
  const [ratedMoviesState, setRatedMovies] = useState(true);
  const [popularMoviesState, setPopularMovies] = useState(true);
  const [ratedTVState, setRatedTV] = useState(true);
  const [popularTVState, setPopularTV] = useState(true);

  const homeHandler = () => {
    setRatedMovies(true);
    setPopularMovies(true);
    setRatedTV(true);
    setPopularTV(true);
  };

  const movieHandler = () => {
    setRatedMovies(true);
    setPopularMovies(true);
    setRatedTV(false);
    setPopularTV(false);
  };
  const tvHandler = () => {
    setRatedMovies(false);
    setPopularMovies(false);
    setRatedTV(true);
    setPopularTV(true);
  };
  return (
    <MovieContext.Provider
      value={{
        popularMovies: popularMoviesState,
        popularTV: popularTVState,
        ratedMovies: ratedMoviesState,
        ratedTV: ratedTVState,
      }}
    >
      <Header
        homeHandler={homeHandler}
        movieHandler={movieHandler}
        tvHandler={tvHandler}
      />
      <Movies />
    </MovieContext.Provider>
  );
}

export default App;
