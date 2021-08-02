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
    url: '',
    body: '',
    method: '',
    response: { 'Hello': 'I am bored. Please make a fetch!' },
  }

  async componentDidMount() {
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, method, body } = this.state;
    setMethod(method);
    setUrl(url);

    const apiResponse = await fetchService(url, method, body);

    this.setState({ 
      response: apiResponse, 
      method
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { url, body, method, response } = this.state;

    return (
      <article id="postcatContainer">
        <header><Header /></header>
        <section className={styles.bodySection}>
          <section className={styles.sidebar}><Sidebar /></section>
          <section className={styles.mainBody}>
            <section className={styles.fetcher}><Fetcher url={url} body={body} method={method} onChange={this.handleChange} /></section>
            <section><ResponseDisplay response={response}/></section>
          </section>
        </section>
      </article>
    );
  }
}
