import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const reducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    // return { counter: store.counter + 1, privacy: !store.privacy };
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUBTRACT") {
    return {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  //The problem here is that if the store has more than hundred values and in order to return the full store, I'd have to return all hundred values in every condition

  //One solution here is spread operator. The second solution is redux toolkit
  return store;
};

const counterStore = createStore(reducer);

export default counterStore;
