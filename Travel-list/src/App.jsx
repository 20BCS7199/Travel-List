import { useState } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([
    {
      Quantity: 1,
      Item: "Charger",
      isItemPacked: false,
    },
  ]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const itemsCount = items.length;
  let packedItemsCount = 0;

  const handlePackingStateChange = (index) => {
    const updatedItems = [...items];
    const packedItem = updatedItems[index];
    packedItem.isItemPacked = !packedItem.isItemPacked;
    for (let i = 0; i < items.length; i++) {
      if (items.isItemPacked) packedItemsCount++;
    }
    console.log(packedItemsCount);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <Header />
      <FormSection handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        handlePackingStateChange={handlePackingStateChange}
      />
      <Stats itemsCount={itemsCount} packedItemsCount={packedItemsCount} />
    </div>
  );
}

export default App;
