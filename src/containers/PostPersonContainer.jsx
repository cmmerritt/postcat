/* eslint-disable max-len */
import React, { Component } from 'react';
import Fetcher from '../components/Fetcher';
import Header from '../components/Header';
import ResponseDisplay from '../components/ResponseDisplay';
import Sidebar from '../components/SidebarItem';
import { fetchService } from '../services/fetchServices';

export default class PostPersonContainer extends Component {

  state = {
    urlText: '',
    reqText: '',
    method: ''
  }

  componentDidMount() {
  }

  handleSubmit = (e) => {
    const { urlText, reqText, method } = this.state;

    e.preventDefault();
    this.fetch();

    this.setState({ 
      urlText,
      reqText,
      method
    });
    console.log(this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  fetch = () => {
    const { urlText, method, reqText } = this.state;
    return fetchService(urlText, method, reqText)
      .then(res => this.setState({ response: res }));
  }

  render() {
    const { urlText, reqText, method, response } = this.state;

    return (
      <>
        <header><Header /></header>
        <section><Sidebar method={method} urlText={urlText}/></section>
        <section><Fetcher urlText={urlText} reqText={reqText} method={method} onChange={this.handleChange} onSubmit={this.handleSubmit}/></section>
        <section><ResponseDisplay response={response}/></section>
      </>
    );
  }
}
