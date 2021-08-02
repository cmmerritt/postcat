import React from 'react';
import PropTypes from 'prop-types';
import styles from './sidebarItem.css';

const SidebarItem = ({ u, m }) => (
  <section className={styles.sidebarItem}>
    <h4>{m}</h4>
    <span>{u}</span>
  </section>
);

SidebarItem.propTypes = {
  u: PropTypes.string.isRequired,
  m: PropTypes.string.isRequired
};

export default SidebarItem;



