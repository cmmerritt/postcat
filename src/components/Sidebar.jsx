import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = ({ history }) => {
  console.log('hi');
  const sidebarElements = history.map((h, i) => 
  { console.log(h);
    return (
      <li key={i}>
        <SidebarItem 
          {...h}
        />
      </li>
    );
  });

  return (
    <ul>
      {sidebarElements}
    </ul>
  );
};

export default Sidebar;
