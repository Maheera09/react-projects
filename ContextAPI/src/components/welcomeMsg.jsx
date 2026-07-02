import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

function WelcomeMsg() {
  const todoItems = useContext(TodoItemsContext);

  return todoItems.length === 0 && <p>Enjoy your Day!</p>;
} 

export default WelcomeMsg;
