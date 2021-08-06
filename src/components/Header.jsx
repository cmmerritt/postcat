import React from 'react';
import styles from './header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="../../public/assets/postcat.png" className={styles.img}/>
      <h1>Postcat</h1>
      <img src="../../public/assets/postcat.png" className={styles.img}/>
    </header>
  );
};

export default Header;
