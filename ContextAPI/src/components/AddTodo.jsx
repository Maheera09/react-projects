import { useRef, useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef(0);
  const todoDateElement = useRef(0);
  const { addNewItem } = useContext(TodoItemsContext);

  // const handleNameChange = (e) => {
  //   setTodoName(e.target.value);
  // };
  //Not needed after using ref hook
  // const handleDateChange = (e) => {
  //   setTodoDate(e.target.value);
  // };

  const handleAddButton = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    // setTodoDate("");
    // setTodoName("");
    //Not needed after using ref hook
  };

  return (
    <div>
      <center className="todo-container">
        <div className="container ">
          {/* --------- */}
          <form onSubmit={handleAddButton} className="row kg-row">
            <div className="col-6">
              <input
                placeholder="Enter task"
                ref={todoNameElement}
                // onChange={handleNameChange}
              ></input>
            </div>
            <div className="col-4">
              <input
                type="date"
                name=""
                ref={todoDateElement}
                id=""
                // onChange={handleDateChange}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success kg-button">
                Add
              </button>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}

export default AddTodo;
