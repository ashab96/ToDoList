import React, { useState } from "react";

function InputArea(props) {
  const [inputItem, setInputItem] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputItem(newValue);
  }
  function submitItem(event) {
    props.onAddItem(inputItem);
    setInputItem("");
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="New Item"
        value={inputItem}
        onChange={handleChange}
      />
      <button onClick={submitItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
