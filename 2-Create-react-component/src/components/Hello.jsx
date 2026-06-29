import React from "react";

function Hello() {
  let myname = "Maheera";

  let lastname = () => {
    return "Saqib";
  };

  return (
    <div>
      <h1>
        This is the future speaking by {myname} {lastname()}.
      </h1>
    </div>
  );
}

export default Hello;
