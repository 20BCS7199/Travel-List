import { useState } from "react";
import classes from "./PackingList.module.css";

const PackingList = ({
  items,
  handleDeleteItem,
  handlePackingStateChange,
  handleClearList,
  handleSortItemsByPackedStatus,
  handleSortItemsByQuantity,
  handleSortItemsByInputOrder,
}) => {
  const handleChangeSort = (event) => {
    const selectedSortOption = event.target.value;
    if (selectedSortOption === "SORT BY PACKED STATUS") {
      handleSortItemsByPackedStatus();
    } else if (selectedSortOption === "SORT BY QUANTITY") {
      handleSortItemsByQuantity();
    } else if (selectedSortOption === "SORT BY INPUT ORDER") {
      handleSortItemsByInputOrder();
    }
  };
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
              <h3
                style={{
                  textDecoration: item.isItemPacked ? "line-through" : "none",
                }}
              >
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
      <div className={classes.filterContainer}>
        <select className={classes.filter} onChange={handleChangeSort}>
          <option>SORT BY INPUT ORDER</option>
          <option>SORT BY PACKED STATUS</option>
          <option>SORT BY QUANTITY</option>
        </select>
        <button className={classes.clearButton} onClick={handleClearList}>
          CLEAR LIST
        </button>
      </div>
    </div>
  );
};

export default PackingList;
