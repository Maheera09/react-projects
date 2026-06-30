import React from "react";

function Item({ foodItem, handleBuyButtonClicked }) {
  return (
    <>
      <li className="list-group-item">
        {foodItem}
        <span>
          <button onClick={handleBuyButtonClicked}>Buy</button>
        </span>
      </li>
    </>
  );
}

export default Item;
