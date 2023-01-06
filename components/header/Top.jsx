/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import { useState } from 'react';
import UserMenu from './UserMenu';

const Top = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/011/571/331/small/circle-flag-of-vietnam-free-png.png"
              alt="vietnam"
            />
            <span>Vietnam / usd</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            {loggedIn ? (
              <li>
                <div className={styles.flex}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU"
                    alt="icon-user"
                  />
                  <span>Nhat</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            <UserMenu loggedIn={loggedIn} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
