import classes from "./MovieOverview.module.css";
import Modal from "../UI/Modal";
import React, { useState, useContext } from "react";
import movieContext from "../store/movieContext";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";

const MovieOverview = (props) => {
  const [trailerState, setTrailerState] = useState(false);
  const ctx = useContext(movieContext);
  const date = ctx.movie.releaseDate.split("-")[0];
  const trailer = "https://www.youtube.com/embed/".concat(ctx.videos.key);

  const trilerHandler = () => {
    setTrailerState(true);
  };
  return (
    <Modal>
      <div className={classes.main}>
        {!trailerState && (
          <img src={ctx.movie.backdrop} className={classes.img}></img>
        )}
        {trailerState && (
          <iframe
            className={classes.trailer}
            src={trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <div className={classes.toFlex}>
          <button className={classes.closeBtn} onClick={props.onClick}>
            Close
          </button>
          <h2 className={classes.title}>{ctx.movie.title}</h2>
          <div className={classes.details}>
            <h5 className={classes.border}>{ctx.movie.vote}</h5>
            <h5 className={classes.border}>{date}</h5>
            {ctx.videos.key && (
              <PlayCircleOutline
                className={classes.icon}
                onClick={trilerHandler}
              />
            )}
          </div>
        </div>
        <h5 className={classes.overview}>{ctx.movie.overview}</h5>
      </div>
    </Modal>
  );
};

export default MovieOverview;
