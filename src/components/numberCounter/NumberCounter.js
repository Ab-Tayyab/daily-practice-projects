import React, { useState } from "react";
import './NumberCounter.css'

const NumberCounter = () => {
  let [count, setCount] = useState(0);

  const incrementFunction = () => {
    count += 1;
    setCount(count);
  };
  const decrementFunction = () => {
    count -= 1;
    setCount(count);
  };
  const resetFunction = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <div>
        <h1>{count}</h1>
        <div>
          <button onClick={incrementFunction}>+</button>
          <button onClick={resetFunction}>Reset</button>
          <button onClick={decrementFunction}>-</button>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
