import React from "react";
import styles from "../App.module.css";

function ButtonContainer() {
  let buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "%",
    "/",
    "*",
    ".",
    "=",
  ];
  return (
    <>
      <div className={styles.buttonscontainer}>
        {buttonNames.map((btn) => (
          <button className={styles.button}>{btn}</button>
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
