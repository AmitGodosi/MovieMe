import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.nav}>
      <header className={classes.header}>
        <h2 className={classes.titleStart}>Movie</h2>
        <h2 className={classes.titleEnd}>Me</h2>
      </header>
      <div className={classes.actions}>
        <button onClick={props.homeHandler}>Home</button>
        <button onClick={props.movieHandler}>Movies</button>
        <button onClick={props.tvHandler}>Series</button>
      </div>
    </div>
  );
};

export default Header;
