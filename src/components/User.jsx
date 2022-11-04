import React from 'react';

const User = (props) => {
  return (
    <div>
      <div className="user">
        <h2>Name: {props.name || 'Default name'}</h2>
        <h3>Job: {props.job || 'Default job'}</h3>
      </div>
    </div>
  );
};

// User.defaultProps = {
//   name: 'Default name',
//   job: 'Default job',
// };

export default User;
