import classes from "./LatestMovie.module.css";

const LatestMovieOverview = (props) => {
  return (
    <img onClick={props.onClick} src={props.backdrop} className={classes.img} />
  );
};

export default LatestMovieOverview;
