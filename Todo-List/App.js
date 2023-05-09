import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEl, i) => {
        return i !== id;
      });
    });
    console.log("del");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-6 rounded-lg">
        <br />
        <h1 className="text-4xl font-bold"> ToDo List</h1>
        <br />
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Add a Item"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 mx-2"
            value={inputList}
            onChange={itemEvent}
          />
          <button
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-3xl"
            onClick={listOfItems}
          >
            +
          </button>
        </div>

        <ol className="list-none">
          {/* <li className="list-item ml-4">{inputList}</li> */}
          {items.map((itemua, i) => {
            return (
              <TodoList
                key={i}
                text={itemua}
                id={i}
                number={i + 1}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;

//  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50
