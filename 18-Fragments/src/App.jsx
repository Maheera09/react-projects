import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [fooditems, setfooditems] = useState([]);

  //let fooditems = [];

  const handleonKeyDown = (e) => {
    let newFoodItem;
    if (e.key === "Enter") {
      newFoodItem = e.target.value;
      let newItems = [...fooditems, newFoodItem];
      setfooditems(newItems);
    }
  };

  return (
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleonKeyDown={handleonKeyDown} />
      <ErrorMsg items={fooditems} />
      <FoodItems items={fooditems} />
    </Container>
  );
}

export default App;
