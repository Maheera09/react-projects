function TodoItem({ todoName, todoDate, handleDeleteClick }) {
  return (
    <div>
      <center className="todo-container">
        <div className="container">
          <div className="row kg-row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger kg-button"
                onClick={() => {
                  handleDeleteClick(todoName);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default TodoItem;
