import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoItemsContext from "../store/todo-items-store";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.duedate}
       
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
