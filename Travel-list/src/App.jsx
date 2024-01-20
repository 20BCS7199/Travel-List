import { useState } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

let id = 0;
function App() {
  const [items, setItems] = useState([]);
  const itemsCount = items.length;

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id }]);
    id++;
  };

  const handleDeleteItem = (id) => {
    const index = items[id];
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const packedItemsCount = () => {
    return items.reduce((acc, item) => {
      if (item.isItemPacked) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  };

  const totalPackedItemsCount = packedItemsCount();

  const handlePackingStateChange = (id) => {
    const updatedItems = [...items];
    const updatedItem = { ...updatedItems[id] };
    updatedItem.isItemPacked = !updatedItem.isItemPacked;
    updatedItems[id] = updatedItem;
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <Header />
      <FormSection handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePackingStateChange={handlePackingStateChange}
      />
      <Stats itemsCount={itemsCount} packedItemsCount={totalPackedItemsCount} />
    </div>
  );
}

export default App;
