import React from "react";
import styles from "./Calculation.module.css";

function Calculation({bill, tip, person, reset}) {


    const tipPerPerson = +(((bill * tip) /person).toFixed(2));
    const totalBill= +((+bill+((bill * tip) /person))).toFixed(2);
   

  return (
    <>
      <div className={styles.main_box}>
        <div className={styles.box}>
          <div className={styles.text}>
            <p className={styles.txt}>Tip Amount</p>
            <p className={styles.span}>/ person</p>
          </div>
          <div className={styles.tip_amount}>${bill && person && tip ? tipPerPerson : "0.00"}</div>
        </div>
        <div className={styles.box}>
          <div className={styles.text}>
            <p className={styles.txt}>Total</p>
            <p className={styles.span}>/ person</p>
          </div>
          <div className={styles.total_amount}>${bill && person && tip ? totalBill : "0.00"}</div>
        </div>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
}

export default Calculation;
