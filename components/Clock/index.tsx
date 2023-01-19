import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import styles from "./index.module.css";

function Clock({ timeZone }) {
  const [date, setDate] = useState(new Date());

  function tickClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(tickClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span className={styles.clock}>{date.toLocaleTimeString("en-US", { timeZone: timeZone })}</span>;
}

Clock.propTypes = {
  timeZone: PropTypes.string
}

export default Clock;
