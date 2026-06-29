import React from "react";

function ErrorMsg({ items }) {
  return <>{items.length === 0 ? <p>There are no food items</p> : null}</>;
}

export default ErrorMsg;
