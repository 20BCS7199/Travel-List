import classes from "./Stats.module.css";

const Stats = ({ itemsCount, packedItemsCount }) => {
  const percentage =
    itemsCount === 0 ? 0 : Math.round((packedItemsCount / itemsCount) * 100);
  return (
    <div className={classes.container}>
      <p>
        💼 You have {itemsCount} items in your list, and you already packed{" "}
        {packedItemsCount} ({percentage}%)
      </p>
    </div>
  );
};

export default Stats;
