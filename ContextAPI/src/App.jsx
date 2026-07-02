import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/welcomeMsg";
import { TodoItemsContextProvider } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
      {/* everything inside this provider can access the context now and everything in it will be changes once the state passed to it changes*/}
    </TodoItemsContextProvider>
  );
}

export default App;
