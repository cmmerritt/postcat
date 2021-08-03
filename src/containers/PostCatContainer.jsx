/* eslint-disable max-len */
import React, { Component } from 'react';
import Fetcher from '../components/Fetcher';
import Header from '../components/Header';
import ResponseDisplay from '../components/ResponseDisplay';
import Sidebar from '../components/Sidebar';
import { fetchService } from '../services/fetchServices';
import styles from './postCatContainer.css';

export default class PostCatContainer extends Component {

  state = {
    url: '',
    body: '',
    method: '',
    response: { 'Hello': 'I am a bored cat. Please make a fetch!' },
    history: []
  }

  componentDidMount() {
    const storedHistory = JSON.parse(localStorage.getItem('HISTORY') || '[]');
    if(storedHistory) {
      this.setState({ history:storedHistory });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // const localStorage = window.localStorage;
    // console.log(localStorage);
    const { url, method, body } = this.state;
    const apiResponse = await fetchService(url, method, body);
    const localHistory = JSON.parse(localStorage.getItem('HISTORY') || '[]');
    localStorage.setItem('HISTORY', JSON.stringify([...localHistory, { method, url }]));
    // console.log(history);
    const storedHistory = JSON.parse(localStorage.getItem('HISTORY') || '[]');

    this.setState({ 
      response: apiResponse,
      history: storedHistory
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { url, body, method, response, history } = this.state;
    return (
      <article id="postcatContainer">
        <header><Header /></header>
        <section className={styles.bodySection}>
          <section className={styles.sidebar} data-testid="sidebar">
            <Sidebar history={history} />
          </section>
          <section className={styles.mainBody}>
            <section className={styles.fetcher}>
              <Fetcher url={url} body={body} method={method} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            </section>
            <section>
              <ResponseDisplay response={response}/>
            </section>
          </section>
        </section>
      </article>
    );
  }
}
