/* eslint-disable max-len */
import React, { Component } from 'react';
import Fetcher from '../components/Fetcher';
import Header from '../components/Header';
import ResponseDisplay from '../components/ResponseDisplay';
import Sidebar from '../components/SidebarItem';
import { fetchService } from '../services/fetchServices';

export default class PostCatContainer extends Component {

  state = {
    loading: true,
    urlText: '',
    reqText: '',
    method: '',
    response: ''
  }

  async componentDidMount() {
    this.setState({ loading: false });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { urlText, method, reqText } = this.state;

    const apiResponse = await fetchService(urlText, method, reqText);
    console.log(apiResponse);

    this.setState({ 
      response: apiResponse, 
      method, 
      loading: false });

    console.log(this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
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
