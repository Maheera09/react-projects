import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        {/* --------- */}
        <div className="items-container">
          <TodoItem1 />
          <TodoItem1 />
          <TodoItem1 />
        </div>
        {/* --------- */}
      </center>
    </div>
  );
}

export default App;
