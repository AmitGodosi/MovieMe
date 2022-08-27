import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <section className={classes.movie} onClick={props.onClick}>
      <img alt="movies poster" src={props.img} className={classes.img}></img>
    </section>
  );
};

export default Movie;
