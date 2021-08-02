import React from 'react';
import styles from './sidebarItem.css';

const SidebarItem = ({ history }) => (
  <section className={styles.sidebarItem}>
    <h4>{history.method}</h4>
    <span>{history.url}</span>
  </section>
  console.log(history);
);

export default SidebarItem;



