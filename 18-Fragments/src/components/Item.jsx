import React from "react";

function Item({ foodItem }) {
  return (
    <>
      <li className="list-group-item">{foodItem}</li>
    </>
  );
}

export default Item;
