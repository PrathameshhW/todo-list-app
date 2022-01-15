import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo-Style">
        <button
          className="btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          🗙
        </button>
        <li> {props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
