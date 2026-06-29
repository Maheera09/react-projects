import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";

function App() {
  let fooditems = ["Milk", "Chia Seeds", "Lime noodles", "Egg", "Salad"];
  //let fooditems = [];

  return (
    <Container>
      <h1>Healthy Food</h1>

      <ErrorMsg items={fooditems} />

      <FoodItems items={fooditems} />
    </Container>
  );
}

export default App;
