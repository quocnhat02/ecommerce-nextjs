import React from 'react';
import Button from './Button';
import Card from './Card';

const User = ({ name, job }) => {
  return (
    <div>
      <Card>
        <div className="user">
          <h2>Name: {name}</h2>
          <h3>Job: {job}</h3>
          <Button>Learn More</Button>
        </div>
      </Card>
    </div>
  );
};

User.defaultProps = {
  name: 'Default name',
  job: 'Default job',
};

export default User;
