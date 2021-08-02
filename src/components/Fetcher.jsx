/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Fetcher = ({ urlText, method, reqText, onChange, onSubmit }) => {
  return <div>
    <form onSubmit={onSubmit}>
      {/* <label htmlFor="urlText"></label> */}
      <input data-testid="urlText" id="urlText" placeholder="URL" type="text" name="urlText" value={urlText} onChange={onChange}/>
    </form>

    <form>
      <div>
        <input type="radio" id="get" name="methods" value="get" method={method} onChange={onChange}/>
        <label htmlFor="get">GET</label>

        <input type="radio" id="post" name="methods" value="post" method={method} onChange={onChange}/>
        <label htmlFor="post">POST</label>

        <input type="radio" id="put" name="methods" value="put" method={method} onChange={onChange}/>
        <label htmlFor="put">PUT</label>

        <input type="radio" id="patch" name="methods" value="patch" method={method} onChange={onChange}/>
        <label htmlFor="patch">PATCH</label>

        <input type="radio" id="delete" name="methods" value="delete" method={method} onChange={onChange}/>
        <label htmlFor="delete">DELETE</label>
      </div>

      <div>
        <button type="submit">Go!</button>
      </div>
    </form>

    <form>
      {/* <label htmlFor="reqText"></label> */}
      <textarea data-testid="reqText" id="reqText" placeholder="Raw JSON Body" type="text" name="reqText" value={reqText} onChange={onChange} onSubmit={onSubmit}/>
    </form>
  </div>;
};

Fetcher.propTypes = {
  urlText: PropTypes.string.isRequired,
  method:  PropTypes.string.isRequired,
  reqText: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Fetcher;
