import { useState } from 'react';

const UseStateObject = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    job: 'Web Dev',
    company: 'Google',
  });

  return (
    <>
      <h2 className="--text-center --my2">useState in Object</h2>
      <div className="--card --mx2">
        <h2>Name: {profile.name}</h2>
        <h4>Job: {profile.job}</h4>
        <h4>Company: {profile.company}</h4>
      </div>
    </>
  );
};

export default UseStateObject;
