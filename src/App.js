import { useState } from "react";
import Movies from "./components/Movies/Movies";
import MovieContext from "./components/store/movieContext";
import Header from "./components/Nav/Header";

function App() {
  const [ratedMoviesState, setRatedMovies] = useState(true);
  const [popularMoviesState, setPopularMovies] = useState(true);
  const [ratedTVState, setRatedTV] = useState(true);
  const [popularTVState, setPopularTV] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState(true);

  const homeHandler = () => {
    setRatedMovies(true);
    setPopularMovies(true);
    setRatedTV(true);
    setPopularTV(true);
    setUpcomingMovies(true);
  };

  const movieHandler = () => {
    setRatedMovies(true);
    setPopularMovies(true);
    setUpcomingMovies(true);
    setRatedTV(false);
    setPopularTV(false);
  };
  const tvHandler = () => {
    setRatedMovies(false);
    setPopularMovies(false);
    setRatedTV(true);
    setPopularTV(true);
    setUpcomingMovies(false);
  };
  return (
    <MovieContext.Provider
      value={{
        popularMovies: popularMoviesState,
        popularTV: popularTVState,
        ratedMovies: ratedMoviesState,
        ratedTV: ratedTVState,
        upcomingMovies: upcomingMovies,
      }}
    >
      <Header
        homeHandler={homeHandler}
        tvHandler={tvHandler}
        movieHandler={movieHandler}
      />
      <Movies />
    </MovieContext.Provider>
  );
}

export default App;
