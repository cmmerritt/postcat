import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = (items) => {
  const sidebarElements = items.map((item) => (
    <li key={item.method + item.urlText}>
      <SidebarItem 
        method={item.method}
        urlText={item.urlText}
      />
    </li>
  ));

  return <ul>{sidebarElements}</ul>;
};

export default Sidebar;
