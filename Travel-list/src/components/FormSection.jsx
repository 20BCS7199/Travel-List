import { useState } from "react";
import classes from "./FormSection.module.css";

const FormSection = ({ handleAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemInput, setItemInput] = useState("");

  const reset = () => {
    setQuantity(1);
    setItemInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const addItem = () => {
    const newItem = {
      quantity: quantity,
      item: itemInput,
      isItemPacked: false,
    };
    handleAddItem(newItem);
    reset();
  };

  return (
    <div className={classes.form}>
      <p className={classes.title}>What do you need for your 😍 trip?</p>
      <div className={classes.itemCountContainer}>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        value={itemInput}
        placeholder="Enter an item..."
        className={classes.itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={classes.addButton} onClick={addItem}>
        ADD
      </button>
    </div>
  );
};

export default FormSection;
