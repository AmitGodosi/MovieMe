import classes from "./Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <div className={classes.buttonMain} onClick={onClick}>
      <button className={classes.button}>{label}</button>
    </div>
  );
};

export default Button;
