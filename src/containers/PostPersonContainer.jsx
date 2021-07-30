import React, { Component } from 'react';
import Header from '../components/Header';
import SidebarItem from '../components/SidebarItem';

export default class PostPersonContainer extends Component {
  render() {
    return (
      <>
        <header><Header /></header>
        <p><SidebarItem /></p>
      </>
    );
  }
}
