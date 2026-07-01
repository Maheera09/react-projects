import React, { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };
  const handleAddButton = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div>
      <center className="todo-container">
        <div className="container ">
          {/* --------- */}
          <div className="row kg-row">
            <div className="col-6">
              <input
                placeholder="Enter task"
                value={todoName}
                onChange={handleNameChange}
              ></input>
            </div>
            <div className="col-4">
              <input
                type="date"
                name=""
                id=""
                value={todoDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={() => {
                  handleAddButton();
                }}
                className="btn btn-success kg-button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default AddTodo;
