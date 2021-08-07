import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import './responseDisplay.css';

const ResponseDisplay = ({ response }) => {
  return (
    <pre data-testid="response">
      <ReactJson src={response} />
      {/* displayDataTypes={false} */}
    </pre>
  );
};

ResponseDisplay.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default ResponseDisplay;
