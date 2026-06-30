import React from "react";

function FoodInput({ handleonKeyDown }) {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        onKeyDown={handleonKeyDown}
      />
    </>
  );
}

export default FoodInput;
