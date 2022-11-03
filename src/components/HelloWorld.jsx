import React from 'react';

const HelloWorld = () => {
  const name = 'Nhat';
  const age = 20;
  //   const person = {
  //     name: 'Saitama',
  //   };

  return (
    <div>
      <h1>{name}</h1>
      <h2>I am {age} years old</h2>
      <h2>{Math.floor(Math.random() * 100)}</h2>
    </div>
  );
};

export default HelloWorld;
