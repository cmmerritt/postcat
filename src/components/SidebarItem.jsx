import React from 'react';
import PropTypes from 'prop-types';

const SidebarItem = ({ method, urlText }) => {
  return <>
    <h4>{method}</h4>
    <p>{urlText}</p>
  </>;
};

SidebarItem.propTypes = {
  method: PropTypes.string.isRequired, 
  urlText: PropTypes.string.isRequired
};

export default SidebarItem;



