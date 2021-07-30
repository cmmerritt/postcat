import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = (items) => {
  const sidebarElements = items.map((item) => (
    <li key={item.method + item.url}>
      <SidebarItem 
        method={item.method}
        url={item.url}
      />
    </li>
  ));

  return <ul>{sidebarElements}</ul>;
};

export default Sidebar;
