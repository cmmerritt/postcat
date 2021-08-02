/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './fetcher.css';

const Fetcher = ({ url, method, body, onChange, onSubmit }) => {
  return <div className={styles.fetcher}>
    <form onSubmit={onSubmit}>
      {/* <label htmlFor="url"></label> */}
      <input data-testid="url" className={styles.searchInput} id="url" placeholder="URL" type="text" name="url" value={url} onChange={onChange}/>
      <div className={styles.radioButtons}>
        <input type="radio" id="get" name="method" value="GET" method={method} onChange={onChange}/>
        <label htmlFor="get">GET</label>

        <input type="radio" id="post" name="method" value="POST" method={method} onChange={onChange}/>
        <label htmlFor="post">POST</label>

        <input type="radio" id="put" name="method" value="PUT" method={method} onChange={onChange}/>
        <label htmlFor="put">PUT</label>

        <input type="radio" id="patch" name="method" value="PATCH" method={method} onChange={onChange}/>
        <label htmlFor="patch">PATCH</label>

        <input type="radio" id="delete" name="method" value="DELETE" method={method} onChange={onChange}/>
        <label htmlFor="delete">DELETE</label>
      </div>

      <div>
        <button type="submit" className={styles.goButton}>Go!</button>
      </div>
    </form>

    <form>
      {/* <label htmlFor="body"></label> */}
      <textarea data-testid="body" id="body" placeholder="Raw JSON Body" type="text" name="body" value={body} onChange={onChange}/>
    </form>
  </div>;
};

Fetcher.propTypes = {
  url: PropTypes.string.isRequired,
  method:  PropTypes.string.isRequired,
  body: PropTypes.any,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Fetcher;
