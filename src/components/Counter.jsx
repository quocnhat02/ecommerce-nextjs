import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h2>React Page</h2>
        <h1>{count}</h1>
        <div className="buttons --flex-center">
          <button className="--btn --btn-danger" onClick={handleSubtract}>
            Subtract
          </button>
          <button className="--btn " onClick={handleReset}>
            Reset
          </button>
          <button className="--btn --btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
