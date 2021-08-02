import React from 'react';
import styles from './header.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="../../public/assets/postcat.png" className={styles.image}/>
      <h1>Postcat</h1>
      <img src="../../public/assets/postcat.png" className={styles.image}/>
    </div>
  );
};

export default Header;
