const redux = require("redux");

/*we need to setup four basic things
1. Reducer
2. Store
3. Subscriber
4. Actions
*/

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
}; //REDUCER

const store = redux.createStore(reducer); //STORE

const subscriber = () => {
  //subsriber wo ha jo kehta ha mjy ye values chahiye and jab ye vlues change ho, UI repaint ho jaye

  const state = store.getState(); //returns state.
  console.log(state);
}; //SUBSCRIBER

store.subscribe(subscriber); //subscriber function idr store ko subscribe kr rha ha

store.dispatch({ type: "INCREMENT" }); //ACTION
store.dispatch({ type: "INCREMENT" }); //ACTION
store.dispatch({ type: "DECREMENT" }); //ACTION
store.dispatch({ type: "ADDITION", payload: { number: 7 } }); //ACTION
