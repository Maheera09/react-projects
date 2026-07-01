import React from "react";
import styles from "../App.module.css";

function Display({ calVal }) {
  return (
    <>
      <input type="text" className={styles.display} value={calVal} readOnly />
    </>
  );
}

export default Display;
