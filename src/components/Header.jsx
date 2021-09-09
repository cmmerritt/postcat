import React from 'react';
import styles from './insane.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="../../assets/postcat.png" className={styles.img}/>
      <h1>Postcat</h1>
      <img src="../../assets/postcat.png" className={styles.img}/>
    </header>
  );
};

export default Header;
