import classes from "./Header.module.css";

const Header = () => {
  return (
    <h1 className={classes.container}>
      <div>🌴</div>
      <div>FAR AWAY</div>
      <div className={classes.bagName}>💼</div>
    </h1>
  );
};

export default Header;
