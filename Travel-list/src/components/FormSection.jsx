import { useState } from "react";
import classes from "./FormSection.module.css";

const FormSection = ({ handleAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemInput, setItemInput] = useState("");

  const reset = () => {
    setQuantity(1);
    setItemInput("");
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
      <select
        className={classes.itemCountContainer}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={itemInput}
        placeholder="Item..."
        className={classes.itemInput}
        onChange={(e) => setItemInput(e.target.value)}
      />
      <button className={classes.addButton} onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default FormSection;
