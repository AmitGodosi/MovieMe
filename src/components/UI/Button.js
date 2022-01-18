import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.buttonMain} onClick={props.onClick}>
      <button className={classes.button}>{props.label}</button>
    </div>
  );
};

export default Button;
