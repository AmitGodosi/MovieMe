import classes from "./MovieOverview.module.css";
import Modal from "../UI/Modal";
import React, { useContext } from "react";
import movieContext from "../store/movieContext";

const MovieOverview = (props) => {
  const ctx = useContext(movieContext);
  const date = ctx.movie.releaseDate.split("-")[0];
  return (
    <Modal>
      <div className={classes.main}>
        <img src={ctx.movie.backdrop} className={classes.img}></img>
        <h2 className={classes.title}>{ctx.movie.title}</h2>
        <div className={classes.details}>
          <h5 className={classes.border}>{ctx.movie.vote}</h5>
          <h5 className={classes.border}>{date}</h5>
        </div>
        <button className={classes.closeBtn} onClick={props.onClick}>
          Close
        </button>
        <h5 className={classes.overview}>{ctx.movie.overview}</h5>
      </div>
    </Modal>
  );
};

export default MovieOverview;
