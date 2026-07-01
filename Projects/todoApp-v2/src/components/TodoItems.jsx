import TodoItem from "./TodoItem";

function TodoItems({ todoItems, handleDeleteItem }) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.duedate}
            handleDeleteClick={handleDeleteItem}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
