import React from 'react';
import SidebarItem from './SidebarItem';
import { getMethod, getUrl } from '../services/utils';

const Sidebar = () => {

  const method = getMethod();
  const url = getUrl();

  const sidebarElements = url.map((sidebarItem, i) => {
    return <li key={sidebarItem}>
      <SidebarItem
        method={method[i]}
        urlText={item}
      />
    </li>;
  });

  return (
    <ul>
      {sidebarElements}
    </ul>
  );

  // const sidebarElements = url.map(((item, i) => (
  //   <li key={item.method + item.urlText}>
  //     <SidebarItem 
  //       method={item.method}
  //       urlText={item.urlText}
  //     />
  //   </li>
  // ));

  // return <ul>{sidebarElements}</ul>;
};

export default Sidebar;
