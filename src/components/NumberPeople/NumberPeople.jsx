import React from "react";
import styles from "./NumberPeople.module.css";
import People from "../../images/icon-person.svg";

function NumberPeople({ person, setPerson, error, setError}) {

  const numPerson = (e) => {
    const numInput = +e.target.value;
    if (numInput === 0) {
      setError(true);
    } else {
      setPerson(numInput);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <label>Number of People</label>
        {error&&<span className={styles.span}>can't be zero</span>}
        <img className={styles.people} src={People} alt="dollar" />
        <input
          className={styles.people_number}
          type="number"
          value={person}
          onChange={numPerson}
        />
      </div>
    </>
  );
}

export default NumberPeople;
