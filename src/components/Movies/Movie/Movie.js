import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <section className={classes.movie} onClick={props.onClick}>
      <img alt="movie poster" src={props.img} className={classes.img}></img>
    </section>
  );
};

export default Movie;
