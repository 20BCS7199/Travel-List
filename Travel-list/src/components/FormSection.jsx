import classes from "./FormSection.module.css";
const FormSection = () => {
  return (
    <div className={classes.form}>
      <p className={classes.title}>What do you need for your 😍 trip?</p>
      <select className={classes.selector}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value=""
        placeholder="Item..."
        className={classes.itemInput}
      ></input>
      <button className={classes.addButton}>Add</button>
    </div>
  );
};

export default FormSection;
