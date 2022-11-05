import React from 'react';
import Profile from './Profile';
import styles from './ProfileList.module.css';

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles['profile-container']}>
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
