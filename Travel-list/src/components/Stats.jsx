import classes from "./Stats.module.css";
const Stats = ({ itemObject }) => {
  return (
    <div className={classes.container}>
      <p>
        💼 You have {itemObject.length} items in your list, and you already
        packed 0 (0%)
      </p>
    </div>
  );
};

export default Stats;
