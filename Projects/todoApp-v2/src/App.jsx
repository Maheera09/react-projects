import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Go to Gym",
      duedate: "04/12/2025",
    },
    {
      name: "Help others",
      duedate: "28/12/2025",
    },
    {
      name: "Do something productive",
      duedate: "15/07/2027",
    },
  ];
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </div>
  );
}

export default App;
