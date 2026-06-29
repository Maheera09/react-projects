import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  let fooditems = ["Milk", "Chia Seeds", "Lime noodles", "Egg", "Salad"];
  //let fooditems = [];

  return (
    <Fragment>
      <h1>Healthy Food</h1>

      <ErrorMsg items={fooditems} />

      <FoodItems items={fooditems}/>
    </Fragment>
  );
}

export default App;
