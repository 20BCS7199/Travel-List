import { useState } from "react";
import classes from "./PackingList.module.css";

const PackingList = ({ items, handleDeleteItem, handlePackingStateChange }) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {items.map((item, index) => (
          <div className={classes.cardlabel} key={index}>
            <input
              type="checkbox"
              checked={items[index].isItemPacked}
              onChange={() => handlePackingStateChange(index)}
              className={classes.checkbox}
            />
            <div className={classes.cardcontent}>
              <h3>
                {item.quantity} {item.item}
              </h3>
              <button
                className={classes.cross}
                onClick={() => handleDeleteItem(index)}
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
