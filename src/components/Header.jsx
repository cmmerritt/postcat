import React from 'react';
import styles from './header.css';

const Header = () => {
  return (
    <header>
      <img src="../../public/assets/postcat.png" />
      <h1 className={styles.header}>Postcat</h1>
      <img src="../../public/assets/postcat.png" className={styles.img}/>
    </header>
  );
};

export default Header;
