import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = ({ history }) => {

  const sidebarElements = history.map((history, i) => (
    <li key={i}>
      <SidebarItem
        history={history}
      />
    </li>
  ));

  console.log(sidebarElements);

  return (
    <ul>
      {sidebarElements}
    </ul>
  );
};

export default Sidebar;
