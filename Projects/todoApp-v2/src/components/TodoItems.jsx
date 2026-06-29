import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <tTodoItem odoName={item.name} todoDate={item.duedate} />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
