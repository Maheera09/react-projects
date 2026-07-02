import { createContext, useReducer } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducter = (currentTodoItems, action) => {
  let newTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, duedate: action.payload.itemDate },
    ];
    console.log(`${action.payload.itemName} & ${action.payload.itemDate}`);
  } else if (action.type === "DEL_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }
  return newTodoItems;
};

export const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchToDoItems] = useReducer(todoItemsReducter, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchToDoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DEL_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchToDoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContext;
