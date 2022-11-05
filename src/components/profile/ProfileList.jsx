import React from 'react';
import Profile from './Profile';
import styles from './ProfileList.module.css';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
import { profiles } from '../../profile-data';

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles['profile-container']}>
          {profiles.map((profile, index) => {
            const { img, name, job, company, link } = profile;
            return (
              <Profile
                key={index}
                image={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}
          {/* <Profile
            image={profile1}
            name={'Adora Nwodo'}
            job={'Cloud Engineer'}
            company={'Microsoft'}
            link={'https://twitter.com/AdoraNwodo'}
          />
        </div>
        <div className={styles['profile-container']}>
          <Profile
            image={profile2}
            name={'John Doe'}
            job={'Web Developer'}
            company={'Google'}
            link={'#'}
          />
        </div>
        <div className={styles['profile-container']}>
          <Profile
            image={profile3}
            name={'Fisayo Tinuke'}
            job={'Mobile Developer'}
            company={'ZinoTrust'}
            link={'#'}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
