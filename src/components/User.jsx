import React from 'react';

const User = ({ name, job }) => {
  return (
    <div>
      <div className="user">
        <h2>Name: {name}</h2>
        <h3>Job: {job}</h3>
      </div>
    </div>
  );
};

User.defaultProps = {
  name: 'Default name',
  job: 'Default job',
};

export default User;
