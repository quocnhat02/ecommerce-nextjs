import React from 'react';
import Button from './Button';

const User = ({ name, job }) => {
  return (
    <div className="user">
      <h2>Name: {name}</h2>
      <h3>Job: {job}</h3>
      <Button>Learn More</Button>
    </div>
  );
};

User.defaultProps = {
  name: 'Default name',
  job: 'Default job',
};

export default User;
