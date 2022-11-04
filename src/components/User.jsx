import React from 'react';

const User = (props) => {
  return (
    <div>
      <div className="user">
        <h2>Name: {props.name}</h2>
        <h3>Job: {props.job}</h3>
      </div>
    </div>
  );
};

export default User;
