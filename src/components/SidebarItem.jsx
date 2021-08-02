import React from 'react';
import PropTypes from 'prop-types';

const SidebarItem = ({ method, urlText }) => (
  <section>
    <h4>{method}</h4>
    <span>{urlText}</span>
  </section>
);

SidebarItem.propTypes = {
  method: PropTypes.string.isRequired, 
  urlText: PropTypes.string.isRequired
};

export default SidebarItem;



