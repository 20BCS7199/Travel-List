// FormSection.jsx
import { useState } from "react";
import classes from "./FormSection.module.css";

const FormSection = ({ handleAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemInput, setItemInput] = useState("");

  const addItem = () => {
    const newItem = {
      Quantity: quantity,
      Item: itemInput,
    };
    handleAddItem(newItem);
    reset();
  };

  const reset = () => {
    setQuantity(1);
    setItemInput("");
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
