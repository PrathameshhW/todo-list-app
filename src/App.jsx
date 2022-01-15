import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState([]);

  const inputEvent = (event) => {
    setinputList(event.target.value);
  };
  const listOfItems = () => {
    setitems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };
  const deleteItems = (id) => {
    setitems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add a item"
            onChange={inputEvent}
            value={inputList}
          ></input>
          <button onClick={listOfItems} className="btn1">
            +
          </button>
          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemVal, key) => {
              return (
                <ToDoList
                  key={key}
                  id={key}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
