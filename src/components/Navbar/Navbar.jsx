import React from 'react';
import bloom from '../../images/bloom.png';
import Button from '../Button/Button';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <img src={bloom} alt="logo de bloom" className={styles.img} />
        <Button text="Inscríbite"/>
      </nav>
    </>
  );
};
export default Navbar;
