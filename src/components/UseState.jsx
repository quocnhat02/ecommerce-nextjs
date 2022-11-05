import React, { useState } from 'react';

const UseState = () => {
  const [text, setText] = useState('Hello World');

  const handleClick = () => {
    setText(text === 'Hello World' ? 'Text Changed' : 'Hello World');
  };

  return (
    <section className="--flex-center --100vh">
      <div className="container --center-all">
        <h3>React Page</h3>
        <h1 className="text">{text}</h1>
        <button className="--btn --btn-primary --btn-lg" onClick={handleClick}>
          Change Text
        </button>
      </div>
    </section>
  );
};

export default UseState;
