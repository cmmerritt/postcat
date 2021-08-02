/* eslint-disable max-len */
import React, { Component } from 'react';
import Fetcher from '../components/Fetcher';
import Header from '../components/Header';
import ResponseDisplay from '../components/ResponseDisplay';
import Sidebar from '../components/SidebarItem';
import { fetchService } from '../services/fetchServices';
import { setMethod, setUrl } from '../services/utils';
import styles from './postCatContainer.css';

export default class PostCatContainer extends Component {

  state = {
    loading: true,
    urlText: '',
    reqText: '',
    method: '',
    response: []
  }

  async componentDidMount() {
  }

  handleSubmit = async (e) => {
    const { urlText, method, reqText } = this.state;
    e.preventDefault();
    setMethod(method);
    setUrl(urlText);

    const apiResponse = await fetchService(urlText, method, reqText);

    this.setState({ 
      response: apiResponse, 
      method, 
      loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { urlText, reqText, method, response } = this.state;

    return (
      <article id="postcatContainer">
        <header><Header /></header>
        <section className={styles.bodySection}>
          <section className={styles.sidebar}><Sidebar method={this.state.method} urlText={this.state.urlText}/></section>
          <section className={styles.mainBody}>
            <section className={styles.fetcher}><Fetcher urlText={urlText} reqText={reqText} method={method} onChange={this.handleChange} onSubmit={this.handleSubmit}/></section>
            <section><ResponseDisplay response={response}/></section>
          </section>
        </section>
      </article>
    );
  }
}
