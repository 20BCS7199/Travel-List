import classes from "./Stats.module.css";
const Stats = ({ itemsCount, packedItemsCount }) => {
  return (
    <div className={classes.container}>
      <p>
        💼 You have {itemsCount} items in your list, and you already packed{" "}
        {packedItemsCount} ({(itemsCount / packedItemsCount) * 100}%)
      </p>
    </div>
  );
};

export default Stats;
