import { useState } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [itemObject, setItemObject] = useState([
    {
      Quantity: 1,
      Item: "Charger",
    },
  ]);
  const [packedItems, setPackedItems] = useState(
    Array(itemObject.length).fill(false)
  );

  const addItemToItemObject = (newItem) => {
    setItemObject([...itemObject, newItem]);
    setPackedItems([...packedItems, false]);
  };

  const deleteItem = (index) => {
    const updatedItemObject = [...itemObject];
    updatedItemObject.splice(index, 1);
    setItemObject(updatedItemObject);
  };

  const handlePackingChange = (index) => {
    const updatedPackedItems = [...packedItems];
    updatedPackedItems[index] = !updatedPackedItems[index];
    setPackedItems(updatedPackedItems);
  };

  return (
    <div className="container">
      <Header />
      <FormSection addItemToItemObject={addItemToItemObject} />
      <PackingList
        itemObject={itemObject}
        packedItems={packedItems}
        deleteItem={deleteItem}
        handlePackingChange={handlePackingChange}
      />
      <Stats itemObject={itemObject} packedItems={packedItems} />
    </div>
  );
}

export default App;
