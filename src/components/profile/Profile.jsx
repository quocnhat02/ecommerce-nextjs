import React from 'react';
import styles from './Profile.module.css';
import profile1 from '../../assets/profile1.png';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Card from '../UI/card/Card';

const Profile = () => {
  return (
    <Card>
      <div className={styles.profile}>
        <img src={profile1} alt="" />
        <div className={styles['profile-content']}>
          <h3>My Profile</h3>
          <div className={styles.text}>
            <p>Name:</p>
            <p>Adaora Nwodo</p>
          </div>
          <div className={styles.text}>
            <p>Job:</p>
            <p>Cloud Engineer</p>
          </div>
          <div className={styles.text}>
            <p>Company:</p>
            <p>Microsoft</p>
          </div>

          <IconContext.Provider value={{ color: '#666', size: '20px' }}>
            <div className={styles.icons}>
              <AiOutlineTwitter />
              <AiOutlineGithub />
              <AiOutlineGooglePlus />
            </div>
          </IconContext.Provider>

          <div className={styles.btn}>
            <a href="#" target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
