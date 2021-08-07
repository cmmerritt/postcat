import React from 'react';
import SidebarItem from './SidebarItem.jsx';

const Sidebar = ({ history }) => {
  console.log(history, 'sidebar history');
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
