import React from 'react';
import PropTypes from 'prop-types';

function Response({ from, message }) {
  const { name } = from;
  const { time, text } = message;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span>
        &nbsp; &nbsp;
        <span className="message-data-name">{name}</span>
        <b className="fa me online">⦁</b>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  );
}

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Response;
