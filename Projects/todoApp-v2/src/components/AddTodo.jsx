import React from "react";

function AddTodo() {
  return (
    <div>
      <center class="todo-container">
        <div class="container ">
          {/* --------- */}
          <div class="row kg-row">
            <div class="col-6">
              <input placeholder="Enter task"></input>
            </div>
            <div class="col-4">
              <input type="date" name="" id="" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success kg-button">
                Add
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default AddTodo;
