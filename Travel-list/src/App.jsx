import "./App.css";
import _ from "lodash";
import { useState } from "react";
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
    const index = _.findIndex(items, { id });
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

  const handleClearList = () => {
    const shouldClearList = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (shouldClearList) {
      setItems([]);
    }
  };

  const sortItemsByPackedStatus = () => {
    const sortedItems = [...items].sort((a, b) => {
      return a.isItemPacked - b.isItemPacked;
    });
    setItems(sortedItems);
  };

  const sortItemsByQuantity = () => {
    const sortedItems = [...items].sort((a, b) => {
      return a.quantity - b.quantity;
    });
    setItems(sortedItems);
  };

  const sortItemsByInputOrder = () => {
    const sortedItems = [...items].sort((a, b) => {
      return a.id - b.id;
    });
    setItems(sortedItems);
  };

  return (
    <div className="container">
      <Header />
      <FormSection handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePackingStateChange={handlePackingStateChange}
        handleClearList={handleClearList}
        handleSortItemsByPackedStatus={sortItemsByPackedStatus}
        handleSortItemsByQuantity={sortItemsByQuantity}
        handleSortItemsByInputOrder={sortItemsByInputOrder}
      />
      <Stats itemsCount={itemsCount} packedItemsCount={totalPackedItemsCount} />
    </div>
  );
}

export default App;
