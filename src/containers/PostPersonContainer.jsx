import React, { Component } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/SidebarItem';

export default class PostPersonContainer extends Component {
  render() {
    return (
      <>
        <header><Header /></header>
        <p><Sidebar /></p>
      </>
    );
  }
}
