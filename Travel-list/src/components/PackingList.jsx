import { useState } from "react";
import classes from "./PackingList.module.css";

const PackingList = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className={classes.card}>
      <label className={classes.cardlabel}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className={classes.cardcontent}>
          <h3>Card Title ❌</h3>
        </div>
      </label>
    </div>
  );
};

export default PackingList;
