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
    console.log(`${itemName} & ${itemDate}`);
    const newTodoItems = [...todoItems, { name: itemName, duedate: itemDate }];
    setToDoItems(newTodoItems);
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
  };

export default App;
