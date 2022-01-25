import classes from "./LatestMovie.module.css";

const LatestMovieOverview = (props) => {
  return (
    <div className={classes.imgContainer}>
      <img
        onClick={props.onClick}
        src={props.backdrop}
        className={classes.img}
      />
    </div>
  );
};

export default LatestMovieOverview;
