import React from 'react';
import SidebarItem from './SidebarItem';
import { getMethod, getUrl } from '../services/utils';

const Sidebar = () => {

  const method = getMethod();
  const url = getUrl();

  console.log(method);
  console.log(url);

  const sidebarElements = url.map((sidebarItem, i) => {
    console.log(sidebarItem);
    return <li key={sidebarItem}>
      <SidebarItem
        u={sidebarItem}
        m={method[i]}
      />
    </li>;
  });

  return (
    <ul>
      {sidebarElements}
    </ul>
  );

  // const sidebarElements = url.map(((item, i) => (
  //   <li key={item.method + item.url}>
  //     <SidebarItem 
  //       method={item.method}
  //       url={item.url}
  //     />
  //   </li>
  // ));

  // return <ul>{sidebarElements}</ul>;
};

export default Sidebar;
