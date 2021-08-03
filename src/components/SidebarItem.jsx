import React from 'react';
import styles from './sidebarItem.css';

const SidebarItem = ({ method, url, id }) => (
  <section className={styles.sidebarItem} id={id}>
    <h4 id={id}>{method}</h4>
    <span id={id}>{url}</span>
  </section>
);

export default SidebarItem;



