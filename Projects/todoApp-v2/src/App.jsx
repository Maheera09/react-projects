import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/welcomeMsg";

function App() {
  let initial = [];

  const [todoItems, setToDoItems] = useState(initial);

  const handleNewItem = (itemName, itemDate) => {
    setToDoItems((currentVal) => {
      const newTodoItems = [
        ...currentVal,
        { name: itemName, duedate: itemDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (itemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(newTodoItem);
  };

  return (
    <div>
      <center className="todo-container">
        <AppName />

        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg />}

        <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
      </center>
    </div>
  );
}

export default App;
