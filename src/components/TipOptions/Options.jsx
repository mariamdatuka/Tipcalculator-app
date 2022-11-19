import React from "react";
import styles from "./Options.module.css";

function Options({setTip}) {

  const tipsArray = [5, 10, 15, 25, 50];

  const tipChange=(e)=>{
  const tipValue = +e.target.value;
  setTip(tipValue/100);
  }

  const customChange=(e)=>{
    const customValue=+e.target.value;
    setTip(customValue/100);
  }

  return (
    <>
      <div className={styles.boxx}>
      <p className={styles.title}>Select Tip %</p>
      <div className={styles.grid_box}>
        {tipsArray.map((tip, index) => (
          <button
            key={index}
            className={styles.option}
            onClick={tipChange}
            value={tip}
            >
            {tip}%
          </button>
        ))}
        <input
          placeholder="Custom"
          className={styles.tip}
          onChange={customChange}
        />
      </div>
      </div>
    </>
  );
}

export default Options;
