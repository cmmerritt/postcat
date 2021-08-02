/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './fetcher.css';

const Fetcher = ({ urlText, method, reqText, onChange, onSubmit }) => {
  return <div className={styles.fetcher}>
    <form onSubmit={onSubmit}>
      {/* <label htmlFor="urlText"></label> */}
      <input data-testid="urlText" className={styles.searchInput} id="urlText" placeholder="URL" type="text" name="urlText" value={urlText} onChange={onChange}/>
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
      {/* <label htmlFor="reqText"></label> */}
      <textarea data-testid="reqText" id="reqText" placeholder="Raw JSON Body" type="text" name="reqText" value={reqText} onChange={onChange}/>
    </form>
  </div>;
};

Fetcher.propTypes = {
  urlText: PropTypes.string.isRequired,
  method:  PropTypes.string.isRequired,
  reqText: PropTypes.any,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Fetcher;
