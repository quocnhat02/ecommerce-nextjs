import React from 'react';
import User from './User';
import users from '../data';
import Card from './Card';

const HelloWorld = () => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <Card key={user.id}>
            <User name={user.name} job={user.job} />
          </Card>
        );
      })}

      {/* <User />
      <User name="John" job="Cleaner" />
      <User name="Sarah" job="Baker" /> */}
    </div>
  );
};

export default HelloWorld;
