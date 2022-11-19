import React from "react";
import styles from "./Search.module.css";
import Dollar from "../images/icon-dollar.svg";

function Search({ bill, setBill}) {
  
  const changeBill = (e) => {
   const billInput= +e.target.value;
    setBill(billInput);
  };
  
  return (
    <>
      <div className={styles.container}>
        <label>Bill</label>
        <img className={styles.dollar} src={Dollar} alt="dollar" />
        <input
          className={styles.amount}
          type="number"
          value={bill}
          onChange={changeBill}
        />
      </div>
    </>
  );
}

export default Search;
