import React from 'react';

const Events = () => {
  const handleClick = (e) => {
    alert('Button Clicked');
  };

  return (
    <div>
      <h1>Handling Events</h1>
      <button onClick={handleClick} className="btn">
        Click me
      </button>
    </div>
  );
};

export default Events;
