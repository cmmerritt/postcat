import React, { Component } from 'react';
import Fetcher from '../components/Fetcher';
import Header from '../components/Header';
import ResponseDisplay from '../components/ResponseDisplay';
import Sidebar from '../components/SidebarItem';

export default class PostPersonContainer extends Component {
  render() {
    return (
      <>
        <header><Header /></header>
        <p><Sidebar /></p>
        <p><Fetcher /></p>
        <p><ResponseDisplay /></p>
      </>
    );
  }
}
