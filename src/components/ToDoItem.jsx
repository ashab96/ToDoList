import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>
        <p>{props.text}</p>
      </li>
    </div>
  );
}

export default ToDoItem;
