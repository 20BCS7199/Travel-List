import { useState } from "react";
import classes from "./PackingList.module.css";

const PackingList = ({
  itemObject,
  packedItems,
  deleteItem,
  handlePackingChange,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {itemObject.map((item, index) => (
          <div className={classes.cardlabel} key={index}>
            <input
              type="checkbox"
              checked={packedItems[index]}
              onChange={() => handlePackingChange(index)}
              className={classes.checkbox}
            />
            <div className={classes.cardcontent}>
              <h3>
                {item.Quantity} {item.Item}
              </h3>
              <button
                className={classes.cross}
                onClick={() => deleteItem(index)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackingList;
