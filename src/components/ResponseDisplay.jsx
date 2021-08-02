import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const ResponseDisplay = ({ response }) => {
  return (
    <pre>
      <ReactJson src={response} />
      {/* displayDataTypes={false} */}
    </pre>
  );
};

ResponseDisplay.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default ResponseDisplay;
