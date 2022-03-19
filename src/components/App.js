import React from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputItem) {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <InputArea onAddItem={addItem} />
      <div>
        <ul>
          {items.map((todoitem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
