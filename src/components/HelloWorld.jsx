import React from 'react';
import Card from './Card';
import User from './User';

const HelloWorld = () => {
  return (
    <div>
      <h1>List of Users</h1>
      <Card>
        <h2>This is a card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          aspernatur modi deleniti, neque hic placeat non quod atque
          exercitationem adipisci dignissimos maiores nobis dicta commodi ab
          vero quibusdam ad magni?
        </p>
      </Card>
      <User />
      <User name="John" job="Cleaner" />
      <User name="Sarah" job="Baker" />
    </div>
  );
};

export default HelloWorld;
