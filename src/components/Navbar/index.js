import React from 'react';
import shoppingIcon from '../../assets/shopping-icon.svg';
import styles from './navbar.module.css';
function index() {
  return (
    <nav className={styles.nav}>
      <img src={shoppingIcon} className={styles.navIcon} alt="shopping icon" />
      <h1 className={styles.navTitle}>Shopping List</h1>
    </nav>
  );
}

export default index;
