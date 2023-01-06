/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './styles.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Main = () => {
  const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/">
          <span className={styles.logo}>
            <img src="../../logo.png" alt="logo" />
          </span>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart">
          <i className={styles.cart}>
            <FaOpencart />
            <span>{cart.length}</span>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Main;
